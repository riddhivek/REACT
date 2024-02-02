import { useState, useCallback } from "react"
import Button from "./Button"
import Title from "./Title"
import Count from "./Count"



const ParentComponent = () => {

    const [cup, setCup] = useState(0)
    const [cup1, setCup1] = useState(0)
    const [price, setPrice] = useState(0)
    const [price1, setPrice1] = useState(0)
    const [salary, setSalary] = useState(5000)


    const incrementCup = useCallback(() => {
        setCup(cup + 1);
    }, [cup])
    const decrimentCup1 = useCallback(() => {
        setCup1(cup1 - 1);
    }, [cup1])
    const incrementPrice = useCallback(() => {
        setPrice(price + 10)
    }, [price])
    const decrimentPrice1 = useCallback(() => {
        setPrice1(price1 - 10)
    }, [price1])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 100)
    }, [salary])
    return (
        <div>
            <Title />
            <Count text="Cup" count={cup} />
            <Count text="Cup1" count={cup1} />
            <Button handleClick={incrementCup}>Incerement Cup</Button>
            <Button handleClick={decrimentCup1}>Decriment Cup</Button>
            <Count text="Per 1 cup " count={price} />
            <Count text="Per 1 cup1 " count={price1} />
            <Button handleClick={incrementPrice}>Increment Salary</Button>
            <Button handleClick={decrimentPrice1}>Decriment Price</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentComponent