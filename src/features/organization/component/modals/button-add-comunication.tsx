import { CableRounded } from "@mui/icons-material"
import { Button } from "@mui/joy"
import { useState } from "react"
import { Communication } from "./communication-form"




export const AddCommunication = () => {
    const [communication, setCommunication] = useState<number[]>([])

    const handleAddCommunication = () => {
        const newCargo = Date.now()
        setCommunication(v => [...v, newCargo])
    }

    return (
        <>
            <Button size='sm' sx={{ width: '15%' }} startDecorator={<CableRounded />} onClick={handleAddCommunication}>Добавить контакт</Button>
            {communication.map(() => <Communication />)}
        </>
    )
}