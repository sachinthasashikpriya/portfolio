import { profile } from "../data/data";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl font-bold">{profile.name}</h1>
      <p className="text-xl text-gray-600">{profile.role}</p>
      <p className="mt-4 max-w-xl mx-auto">{profile.about}</p>
      <div className="flex justify-center gap-4 mt-6">
        <a href={profile.github} target="_blank"><Github /></a>
        <a href={profile.linkedin} target="_blank"><Linkedin /></a>
        <a href={`mailto:${profile.email}`}><Mail /></a>
      </div>
    </section>
  );
}
