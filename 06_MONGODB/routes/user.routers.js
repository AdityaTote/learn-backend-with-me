import { Router } from "express";
import { handleUserAndEmail,
         handleNewEntry,
         handleDisplayData,
         handleFindById,
         handleFindANdUpdate,
         handleDeleteData } from "../controllers/index.controllers.js"

const userRouter = Router()

userRouter
.route("/")
.get(handleUserAndEmail)
.post(handleNewEntry);

userRouter.route("/all")
.get(handleDisplayData);

userRouter.route("/:id")
.get(handleFindById)
.patch(handleFindANdUpdate)
.delete(handleDeleteData)

export { userRouter }