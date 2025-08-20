# Load environment variables first
from dotenv import load_dotenv

load_dotenv()


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import screenshot, generate_code, home, evals
from .custom_types import InputMode
from .llm import (
    Completion,
    Llm,
    stream_claude_response,
    stream_claude_response_native,
    stream_gemini_response,
    stream_openai_response,
)

app = FastAPI(openapi_url=None, docs_url=None, redoc_url=None)

# Configure CORS settings
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Add routes
app.include_router(generate_code.router)
app.include_router(screenshot.router)
app.include_router(home.router)
app.include_router(evals.router)
