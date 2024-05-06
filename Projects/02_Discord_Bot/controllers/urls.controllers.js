import { customAlphabet } from "nanoid"
import dotenv  from "dotenv"

import { Url } from "../models/urls.models.js"

dotenv.config();

const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const generateShortId = customAlphabet(alphabet, 6);

async function handleURLShort(req,res){
    try{
        const { url } = req.body;
        const shortId = generateShortId();
        const shortLink = `http://localhost:${process.env.PORT}/${shortId}`;
        if(!url){
            return res.json("url not found");
        }
        
        await Url.create({
            url: url,
            shortId: shortId,
            shortLink: shortLink
        });
        return res.json(shortLink);
    } catch(err){
        return res.json({ err: err.message});
    }
}

async function handleUrlDisplay(req,res){
    try{
        const { shortId } = req.params;
        const link = await Url.findOne  ({ shortId })
        if(link){
            return res.redirect(link.url);
        } else {
            return res.status(404).send('Short link not found');
        }
    } catch (err) {
        return res.json({ err: err.message});
    }
}

export { handleURLShort,
        handleUrlDisplay }