# 👁️RetinaScan: Multimodal Retinal Disease Diagnosis

<p> <h2>🌟 Project Showcase </h2>
Explore the complete project walkthrough here:
👉<a href="https://varshithalu.github.io/retinascan/" target="_blank">
    <img src="https://img.shields.io/badge/View-Live%20Demo-blue?style=for-the-badge" />
  </a>
</p>


RetinaScan is a full-stack healthcare web application that detects Diabetic Retinopathy from retinal fundus images. It classifies images across multiple severity stages using a fine-tuned EfficientNet-B4 model, making early-stage screening faster and more accessible.

---

## Overview

Diabetic Retinopathy (DR) is a leading cause of blindness, yet early detection dramatically improves outcomes. RetinaScan bridges the gap between clinical imaging and accessible AI diagnosis by:

- Accepting retinal fundus image uploads via a modern web interface
- Running inference with a PyTorch-based EfficientNet-B4 classifier
- Returning a severity classification alongside a confidence score
- Surfacing results through a responsive React frontend

---

## Features

- Upload retinal fundus images (JPEG/PNG)
- Multi-class DR severity classification: No DR → Mild → Moderate → Severe → Proliferative
- Confidence score visualization per prediction
- Grad-CAM heatmap overlay for model explainability
- Gemini LLM integration for contextual medical insights
- FastAPI backend with async inference support
- Responsive React + Tailwind CSS frontend
- Secure API communication via Axios
- PostgreSQL for storing prediction history

---

## 📂 Dataset

Model trained on the APTOS 2019 Blindness Detection Dataset.

- Classes: 5
- Images: 3,662
- Source: Kaggle

---

## Tech Stack

## Frontend 
* React.js
* Tailwind CSS
* Axios
* React Router 

## Backend 
* FastAPI
* Python
* Uvicorn 

## ML / AI 
* PyTorch
* EfficientNet-B4
* Grad-CAM
* Gemini API 

## Database 
* PostgreSQL 


## AI Workflow

```
Doctor uploads fundus image
        ↓
Image preprocessing & normalization
        ↓
EfficientNet-B4 inference (PyTorch)
        ↓
Severity Prediction
      │
      ├──────────────┐
      ▼              ▼
Confidence      Grad-CAM
      │              │
      └──────┬───────┘
             ▼
Gemini LLM generates clinical context
        ↓
FastAPI returns structured response
        ↓
React frontend renders results
```

### Severity Classes

| Class | Label | Description |
|---|---|---|
| 0 | No DR | No signs of diabetic retinopathy |
| 1 | Mild | Minor microaneurysms present |
| 2 | Moderate | More than just microaneurysms |
| 3 | Severe | Extensive abnormalities |
| 4 | Proliferative DR | Advanced stage with neovascularization |

---

## Model Details

- **Architecture:** EfficientNet-B4 (pretrained on ImageNet, fine-tuned on APTOS 2019 dataset)
- **Loss Function:** Weighted Cross-Entropy (to handle class imbalance)
- **Data Augmentation:** Random horizontal/vertical flips, rotation, color jitter, normalization
- **Explainability:** Grad-CAM for visual attention on predicted regions
- **Input Size:** 380×380 px

---


## Getting Started

### Prerequisites

- Python 3.9+
- Node.js 18+
- PostgreSQL
- PyTorch (CPU or CUDA)

### 1. Clone the Repository

```bash
git clone https://github.com/varshithalu/retinascan.git
cd retinascan
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
```
Start the server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

API docs available at: `http://localhost:8000/docs`

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

App available at: `http://localhost:5173`

---

## API Reference

### `POST /predict`

Upload a retinal fundus image and receive a prediction.

**Request**

```
Content-Type: multipart/form-data
Body: image (file)
```

**Response**

```json
{
  "predicted_class": 2,
  "severity_label": "Moderate",
  "confidence": 0.87,
  "gradcam_image": "<base64-encoded heatmap>",
  "clinical_insight": "Moderate NPDR detected. Recommend ophthalmologist review within 3–6 months."
}
```

### `GET /history`

Retrieve past predictions stored in PostgreSQL.

---

## 👩‍💻 Author
**Varshitha L U**

📧 [luvarshitha3139@gmail.com](mailto:luvarshitha3139@gmail.com)

💼 [LinkedIn - varshithalu](https://www.linkedin.com/in/varshithalu/)

💻 [Github - varshithalu](https://github.com/varshithalu)