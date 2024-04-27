import { nanoid } from "nanoid"
import { URL } from "../models/url.models.js"

async function handleGenerateNewShortURL (req,res) {
    const body = req.body;
    const shortId = nanoid(8);
    if(!body.redirectURL) res.status(401).json({ err:"Plz entre url"});

    await URL.create({
        shortId: shortId,
        redirectURL: body.redirectURL,
        visitHistory: []
    })
    res.json({msg:"Succes"});
}

async function handleLinkClick (req,res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {    
            timestamp: Date.now(),
          },
        },
      }
    );
    res.redirect(entry.redirectURL);
}

async function handleGetAnalytic (req,res) {
    const shortId = req.params["shortId"];
    const result = await URL.findOne({shortId});
    res.json({ 
        totalClick: result.visitHistory.length,
        analytic: result.visitHistory
    })
}

export {handleGenerateNewShortURL,
        handleLinkClick,
        handleGetAnalytic}