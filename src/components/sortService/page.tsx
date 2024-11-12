'use client'
import { Select, SelectItem } from "@nextui-org/react";
import { animals } from "./data";
const SortService = () => {
    return (
        <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
                label="Các loại dịch vụ"
                className="max-w-sm"
                size="sm"
            >
                {animals.map((animal) => (
                    <SelectItem key={animal.key}>
                        {animal.label}
                    </SelectItem>
                ))}
            </Select>
        </div>
    )
}
export default SortService
