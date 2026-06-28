from supabase import create_client

SUPABASE_URL = "https://srgygqnboqnpjtpxsnbr.supabase.co"
SUPABASE_KEY = "sb_publishable__Xp67lsju0lNZ_fyNiUu_Q__e22AzPn"

db = create_client(SUPABASE_URL, SUPABASE_KEY)

# Log in first
response = db.auth.sign_in_with_password({
    "email": "test@example.com",
    "password": "password123"
})
user = response.user
print("Logged in as:", user.email)

# UPLOAD a file to storage
with open("test_image.jpg", "rb") as f:
    file_data = f.read()

file_path = f"{user.id}/test_image.jpg"

response = db.storage.from_("todo-attachments").upload(
    path=file_path,
    file=file_data,
    file_options={"content-type": "image/jpeg"}
)
print("Uploaded:", response)

# GET public URL of uploaded file
url_response = db.storage.from_("todo-attachments").get_public_url(file_path)
print("File URL:", url_response)

# INSERT todo with file URL
db.table("todos").insert({
    "task": "Todo with attachment",
    "user_id": user.id,
    "file_url": url_response
}).execute()

# READ todos
todos = db.table("todos").select("*").execute()
for todo in todos.data:
    print(todo)

# DELETE file from storage
db.storage.from_("todo-attachments").remove([file_path])
print("File deleted!")

# Log out
db.auth.sign_out()