import Kitchen from "./kitchen";
import LivingRoom from "./LivingRoom";
import Bedroom from "./bedroom";
import Bath from "./Bath";



const FloorPlan = (props) => {

    return (
        <>
        <Bedroom bedNum={'1'} />
        <Kitchen />
        <LivingRoom />
        <Bath size={'full'} />
        <Bedroom bedNum={'2'} />
        <Bath size={'Half'} />
        <Bedroom bedNum={'3'} />
        </>
    )
}

export default FloorPlan;