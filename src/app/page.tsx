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
    <main>
      {/* <div className="grid grid-cols-3 gap-8"> */}
      <div className="flex items-center justify-center h-full">

        <p>ಓಂ ನಮಃ ಶಿವಾಯ</p>

        {/* <AlertDialog>
          <AlertDialogTrigger>Open</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction>Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog> */}

        {/* {recipes.map(recipe => (
          <Card key={recipe.id} className="flex flex-col justify-between">
            <CardHeader
            // className="flex-row gap-4 items-center"
            >
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>{recipe.title.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>
                  {recipe.title}
                </CardTitle>
                <CardDescription className="mt-2">
                  {recipe.time} mins to cook
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>{recipe.description}</p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button >View Recipe</Button>
              {recipe.vegan && <Badge variant="outline">Vegan!</Badge>}
            </CardFooter>
          </Card>

        ))} */}
      </div>
    </main>
  );
}
