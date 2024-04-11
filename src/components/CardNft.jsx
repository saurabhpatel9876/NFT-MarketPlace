"use client"
import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
const CardNft = () => {
  return (
   <>
  <div className=' grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-4 lg:gap-3 py-2.5 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
  <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
      <Image
      src="/nft hero.webp"
      width={200}
      height={200}
      alt="Picture of the author"
    />

      </CardContent>
      
      <CardFooter className="flex justify-between">
     
        <Button>Deploy</Button>
      </CardFooter>

    </Card>
  

    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
      <Image
      src="/nft hero.webp"
      width={200}
      height={200}
      alt="Picture of the author"
    />

      </CardContent>
      <CardFooter className="flex justify-between">

        <Button>Deploy</Button>
      </CardFooter>

    </Card>


    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
      <Image
      src="/nft hero.webp"
      width={200}
      height={200}
      alt="Picture of the author"
    />

      </CardContent>
      <CardFooter className="flex justify-between">

        <Button>Deploy</Button>
      </CardFooter>

    </Card>




    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        
      <Image
      src="/nft hero.webp"
      width={200}
      height={200}
      alt="Picture of the author"
    />

      </CardContent>
      <CardFooter className="flex justify-between">

        <Button>Deploy</Button>
      </CardFooter>

    </Card>

  </div>
   </>
  )
}

export default CardNft