const { ActivePools,
    UpcomingPools,
    CompletedPools } = require('./data');
const asyncHandler = require("express-async-handler");

const get_all_active_pools = asyncHandler(async (req, res) => {
    try {
        res.json(ActivePools);
    } catch (error) {
        res.json({ message: error })
    }
})
const get_all_upcoming_pools = asyncHandler(async (req, res) => {
    try {
        res.json(UpcomingPools);
    } catch (error) {
        res.json({ message: error })
    }
})
const get_all_completed_pools = asyncHandler(async (req, res) => {
    try {
        res.json(CompletedPools);
    } catch (error) {
        res.json({ message: error })
    }
})
const get_pools_by_id = asyncHandler(async (req, res) => {
    try {
        const id = req.params.id
        const filtered = ActivePools?.filter((pool) => pool.id === Number(id));
        if (!filtered) {
            return res.json(
                "Data does not Exst"
            )
        }
        if (filtered) {
            return res.json(
                filtered
            )
        }

    } catch (error) {
        res.json(
            {
                message: error
            }
        )
    }
})


module.exports = {
    get_all_active_pools,
    get_all_completed_pools,
    get_pools_by_id,
    get_all_upcoming_pools
}