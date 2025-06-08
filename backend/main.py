from fastapi import FastAPI
import docker

app = FastAPI()

@app.get("/")
def root():
    return {"message": "Backend is running"}

@app.get("/containers")
def get_containers():
    try:
        client = docker.from_env()
        containers = client.containers.list()
        return [
            {"name": container.name, "image": container.image.tags}
            for container in containers
        ]
    except Exception as e:
        return {"error": str(e)}
