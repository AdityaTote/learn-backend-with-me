import { nanoid } from "nanoid"
import { URL } from "../models/url.models.js"

//GenerateNewShortURL
async function handleGenerateNewShortURL (req,res) {
    const body = req.body;
    const shortId = nanoid(8);
    if(!body.url) res.status(401).json({ err:"Plz entre url"});

    await URL.create({
        shortId: shortId,
        redirectURL: body.url,
        visitHistory: [],
        createdBy: req.user._id,
    })
    res.render("home", {
      id: shortId
    })
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

//counts Link clicks
async function handleGetAnalytic (req,res) {
    const shortId = req.params["shortId"];
    const result = await URL.findOne({shortId});
    res.json({ 
        totalClick: result.visitHistory.length,
        analytic: result.visitHistory
    })
}

async function handleResult (req,res) {
  const result = await URL.find({createdBy: req.user._id});
  res.render("home",{
    urls: result
  })
}

async function handleAllResult (req,res) {
  const result = await URL.find({});
  res.render("home",{
    urls: result
  })
}

export {handleGenerateNewShortURL,
        handleLinkClick,
        handleGetAnalytic,
        handleResult,
        handleAllResult}