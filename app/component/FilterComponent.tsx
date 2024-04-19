'use client'
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  import { format } from "date-fns"
import { CalendarDays, Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IoWallet } from "react-icons/io5";


const FilterComponent = () => {
    const today = new Date();
    const [date, setDate] = React.useState<Date>();
    const colors = ['text-white', 'text-[#D29C04]', 'text-[#34B53A]', 'text-[#4FD1C5]', 'text-[#9747FF]', 'text-[#C14949]']
  return (
    <div className="bg-white w-full flex flex-col gap-5 py-7">
        <div className='flex flex-row gap-7 mx-12'>
          <div className='flex flex-col'>
              <span>Tipo de filtro</span>
              <Select>
                  <SelectTrigger className="w-[210px] rounded-[10px]">
                    <SelectValue placeholder="Filtro por Data" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
          </div>
          <div className='flex flex-col'>
            <span>Data Inicial</span>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                    variant={"outline"}
                    className={cn(
                        "w-[180px] justify-between text-left font-normal rounded-[10px]",
                        !date && "text-muted-foreground"
                    )}
                    >
                    {date ? format(date, "PPP") : format(today, "PPP")}
                    <CalendarDays className=" h-4 w-4"/>
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                    />
                </PopoverContent>
            </Popover>
          </div>
          <div className='flex flex-col'>
            <span>Data Final</span>
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                        variant={"outline"}
                        className={cn(
                            "w-[180px] justify-between text-left font-normal rounded-[10px]",
                            !date && "text-muted-foreground"
                        )}
                        >
                        {date ? format(date, "PPP") : format(today, "PPP")}
                        <CalendarDays className=" h-4 w-4"/>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                        <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        />
                    </PopoverContent>
                </Popover>
          </div>
          <div className='flex flex-col'>
            <div className='bg-white text-white'>a</div>
          <Button className='bg-blue-500 rounded-[10px] w-32 text-white'>Filtrar</Button>
          </div>
        </div>
        <div className='flex flex-row  mx-12 flex-wrap gap-7'>
            {
                colors.map((index)=>(
                    <div className='flex flex-row p-4 bg-[#F2F9FF] justify-between w-[240px] items-center rounded-[10px]' key={index}>
                        <div className='flex flex-col'>
                            <span>Atendimento acontecendo</span>
                            <span className='font-bold'>23</span>
                        </div>
                        <div className='flex items-center justify-center bg-[#186CC3] w-10 h-10 rounded-[10px]'>
                            <IoWallet className={`w-5 h-5 ${index}`} />
                        </div>
                    </div>
                ))
            }
        </div>
      </div>
  )
}

export default FilterComponent