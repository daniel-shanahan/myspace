"use client";

import Label from "./Label";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

export default function ProfileForm({ user }: any) {
  const updateUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const body = {
      name: formData.get("name"),
      bio: formData.get("bio"),
      age: formData.get("age"),
      image: formData.get("image"),
    };

    const res = await fetch("/api/user", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    await res.json();
  };

  return (
    <div className="w-10/12">
      <h2 className="font-semibold text-2xl pb-4">Edit Your Profile</h2>
      <form onSubmit={updateUser}>
        <Label htmlFor="name" text="Name" />
        <TextInput name="name" defaultValue={user?.name ?? ""} />
        <Label htmlFor="bio" text="Bio" />
        <TextArea
          name="bio"
          defaultValue={user?.bio ?? ""}
          cols={30}
          rows={5}
        />
        <Label htmlFor="age" text="Age" />
        <TextInput name="age" defaultValue={user?.age ?? 0} />
        <Label htmlFor="image" text="Profile Image URL" />
        <TextInput name="image" defaultValue={user?.image ?? ""} />

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 py-2 px-6 text-white text-lg rounded-md"
        >
          Save
        </button>
      </form>
    </div>
  );
}
