"use client"
import React from 'react'

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import ButtonComp from './ButtonComp'
const CreateNft = () => {
  return (
    <>
    <div className='p-3 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'>
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create NFT</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Choose File</DialogTitle>
          <input
                type="file"
                accept="image/png, image/gif, image/jpeg, image/webp"
                className="block w-full text-sm text-slate-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#19212c] file:text-gray-400
                  hover:file:bg-[#1d2631]
                  cursor-pointer focus:ring-0 focus:outline-none"
                // onChange={changeImage}
                required
              />
          {/* <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription> */}
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="name" value="" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              price (ether)
            </Label>
            <Input id="username" value="" className="col-span-3"
             type="number"
             step={0.01}
             min={0.01}
            />
          </div>
        </div>

        
        <div className="flex flex-row justify-between items-center bg-gray-800 rounded-xl mt-5">
            <textarea
              className="block w-full text-sm resize-none
                text-white bg-transparent border-0
                focus:outline-none focus:ring-0 h-20"
              type="text"
              name="description"
              placeholder="Description"
              // onChange={(e) => setDescription(e.target.value)}
              // value={description}
              required
            ></textarea>
          </div>
        <DialogFooter>
          <Button type="submit">Mint Now</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>

   <ButtonComp/>
    </div>
    </>
  )
}

export default CreateNft