from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
import numpy as np
from io import BytesIO
from PIL import Image
import tensorflow as tf
import cv2

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

MODEL = tf.keras.models.load_model("saved_models/skin_disease/model")

CLASS_NAMES = ['Actinic keratoses', 'Basal cell carcinoma', 'Benign lesions of the keratosis', 'Dermatofibrosarcoma', 'malignant melanoma', 'Melanocytic nevi', 'Vascular Disease']



def read_file_as_image(data) -> np.ndarray:
    image = np.array(Image.open(BytesIO(data)))
    return image

@app.post("/predict")
async def predict(
    file: UploadFile = File(...)
):
    image = read_file_as_image(await file.read())
    # print(image.shape)
    image = cv2.resize(image, (28, 28))
    # print(image.shape)
    # image = np.array(image)
    # image = image / 255.0
    img_batch = np.expand_dims(image, axis=0)
    predictions = MODEL.predict(img_batch)

    predicted_class = CLASS_NAMES[np.argmax(predictions[0])]
    confidence = np.max(predictions[0])

    print(predicted_class,int(confidence*100),"%")
    return {
        'class': predicted_class,
        'confidence': np.round(float(confidence*100),2)
    }

if __name__ == "__main__":
    uvicorn.run(app, host='localhost', port=8000)

