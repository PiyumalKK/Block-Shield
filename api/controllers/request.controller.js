import Request from "../models/request.model.js";
import { errorHandler } from "../utils/error.js"



export const createRequest = async (req, res, next ) => {
    if(!req.body.GitHubRepositoryLink)
        {
            return next(errorHandler(400, "Please provide a GitHub repository link"))
        }
        const slug = req.body.em.split(' ').join('-').toLowerCase().
        replace(/[^a-zA-Z0-9-]/g, '');

    const newRequest = new Request({
        ...req.body,slug, userId: req.user.id
    });

    try {
        const savedRequest = await newRequest.save();
        res.status(201).json(savedRequest);
    } catch (error) {
        next(error);
    }
}

export const getrequest = async (req, res, next) => {
    try {
      const startIndex = parseInt(req.query.startIndex) || 0;
      const limit = parseInt(req.query.limit) || 9;
      const sortDirection = req.query.order === 'asc' ? 1 : -1;
      const requests = await Request.find({
        ...(req.query.userId && { userId: req.query.userId }),
        ...(req.query.GitHubRepositoryLink && { GitHubRepositoryLink: req.query.GitHubRepositoryLink }),
        ...(req.query.slug && { slug: req.query.slug }),
        ...(req.query.requestId && { _id: req.query.requestId }),
        ...(req.query.Documentation && { Documentation: req.query.Documentation }),
        ...(req.query.scdi && { scdi: req.query.scdi }),
        ...(req.query.file && { file: req.query.file }),
        ...(req.query.ate && { ate: req.query.ate }),
        ...(req.query.psar && { psar: req.query.psar }),
        ...(req.query.ratm && { ratm: req.query.ratm }),
        ...(req.query.pd && { pd: req.query.pd }),
        ...(req.query.em && { em: req.query.em }),
        ...(req.query.su && { su: req.query.su }),
        ...(req.query.tu && { tu: req.query.tu }),
        ...(req.query.Aom && { Aom: req.query.Aom }),
        
        
        
      })
        .sort({ updatedAt: sortDirection })
        .skip(startIndex)
        .limit(limit);
  
      const totalRequests = await Request.countDocuments();
      const now = new Date();
  
      const oneMonthAgo = new Date(
        now.getFullYear(),
        now.getMonth() - 1,
        now.getDate()
      );
  
      const lastMonthRequests = await Request.countDocuments({
        createdAt: { $gte: oneMonthAgo },
      });
  
      res.status(200).json({
        requests,
        totalRequests,
        lastMonthRequests,
      });
    } catch (error) {
      next(error);
    }
  };

  export const deleterequest = async ( req, res, next ) => {
    if(req.user.id !== req.params.userId)
      {
          return next(errorHandler(403, 'You do not have permission to delete'))
      }
      try {
        await Request.findByIdAndDelete(req.params.requestId);
        res.status(200).json('The post was deleted');

      } catch (error) {
        next(error);
      }
      
};

export const updaterequest = async (req, res, next) => {
  if (req.user.id !== req.params.userId)
    {
      return next(errorHandler(403, 'You are not allowed to update'))
    }
    try {
      const updatedRequest = await Request.findByIdAndUpdate(
        req.params.requestId,
        {
          $set:{
            GitHubRepositoryLink: req.body.GitHubRepositoryLink,
            Documentation: req.body.Documentation,
            scdi: req.body.scdi,
            file: req.body.file,
            ate: req.body.ate,
            psar: req.body.psar,
            ratm: req.body.ratm,
            pd: req.body.pd,
            em: req.body.em,
            su: req.body.su,
            tu: req.body.tu,
            Aom: req.body.Aom,
          }
         
        }, {new: true}
      )
      res.status(200).json(updatedRequest);
    } catch (error) {
      next(error);
    }
}