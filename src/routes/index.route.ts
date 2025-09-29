import { createRouter } from "../utils/createApp";

const router = createRouter()

router.get("/" , (c)=> {
    return c.json("index route")
})

export default router