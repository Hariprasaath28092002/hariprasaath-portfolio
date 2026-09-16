from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Hariprasaath Portfolio API",
    description="Backend API for Hariprasaath's developer portfolio",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    "http://localhost:5173",
    "https://hariprasaath-portfolio.vercel.app/"
]cd bac
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "message": "Hariprasaath Portfolio API",
        "status": "online"
    }


@app.get("/api/health")
def health():
    return {
        "status": "healthy"
    }


@app.post("/api/contact")
def contact(data: dict):

    name = data.get("name")
    email = data.get("email")
    message = data.get("message")

    print(
        f"New message from {name} ({email}): {message}"
    )

    return {
        "success": True,
        "message": "Thank you! I'll get back to you soon."
    }