import docker

from docker.errors import *

IMAGE_NAME = "jasonho/cocode"

client = docker.from_env()

def load_image():
    try:
        client.images.get(IMAGE_NAME)
    except ImageNotFound:
        print "Image not found locally."
        client.images.pull(IMAGE_NAME)
    except APIError:
        print "Image not found locally."
        return
    print "Image loaded!"

def build_and_run(code, lang):
    # Docker operations
    result = {'build': None, 'run': None, 'error': None}

    source_file_parent_dir_name = uuid.uuid4()