import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useState } from "react"
import Image from "../../node_modules/next/image"


interface Recipe {
  title: string,
  image: string,
  time: string,
  description: string,
  vegan: string,
  id: string,
}

async function getRecipes(): Promise<Recipe[]> {
  const result = await fetch('http://localhost:4000/recipes', {
    cache: "no-cache"
  })

  //delay response
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return result.json()

}

export default async function Home() {
  // const recipes = await getRecipes()

  return (
    <main className="h-full flex justify-center items-center">
      <div >
        <Image
          className="rounded-sm"
          src="https://firebasestorage.googleapis.com/v0/b/mern-auth-41ee1.appspot.com/o/Shiva.jpeg?alt=media&token=594447a7-96a8-4489-88ee-a801613f6e88"
          width={500}
          height={500}
          alt="Picture of the author"
        />
        <p className="text-4xl text-center mt-4">ಓಂ ನಮಃ ಶಿವಾಯ</p>
      </div>
    </main>
  );
}
