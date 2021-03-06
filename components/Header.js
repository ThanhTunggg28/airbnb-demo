import Image from "next/image";
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon } from "@heroicons/react/solid"
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from "next/dist/client/router";


function header() {
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }

    const resetInput = () => {
        setSearchInput("");
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const searchPath = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
            }
        });
    }


    return (
        <header className="sticky top-0 z-50 py-3 px-5 grid grid-cols-3 bg-white shadow-md md:px-10">
            
            {/* Left */}
            <div 
                onClick={() => router.push("/")}
                className="relative flex items-center h-10 cursor-pointer
                my-auto" 
                
            >
                <Image 
                    src="https://links.papareact.com/qd3"
                    layout="fill"
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
            {/* Middle */}
            <div className="flex items-center md:border-2 rounded-full py-2">
                <input 
                    value={searchInput}
                    onChange = {(e) => setSearchInput(e.target.value)}
                    type="text" 
                    placeholder="Search" 
                    className="flex-grow outline-none pl-5 bg-transparent
                text-gray-600 text-sm"/>
                <SearchIcon className="h-8 bg-red-500 text-white rounded-full p-2 hidden md:inline-flex
                md:mx-2" />
            </div>
            {/* Right */}
            <div className="flex items-center space-x-4 justify-end text-gray-500">
                <p className="hidden md:inline">Become a host</p>
                <GlobeAltIcon className="h-6" />
                <div className="flex items-center border-2 rounded-full space-x-2 p-1">
                    <MenuIcon className="h-6" />
                    <UserCircleIcon className="h-6" />
                </div>
            </div>
            {searchInput &&
                <div className="flex flex-col col-span-3 mx-auto ">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        onChange={handleSelect}
                        rangeColors = {["#5db24a"]}
                    />
                    <div className="flex">
                        <button 
                            onClick = {resetInput}
                            className="flex-grow text-gray-500">Cancel
                        </button>
                        <button 
                            onClick = {searchPath}
                            className="flex-grow text-red-400">Search
                        </button>
                    </div>
                </div>
                
            }
            
        </header>
    )
}

export default header
