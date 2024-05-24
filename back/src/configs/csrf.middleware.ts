import { Injectable, NestMiddleware } from "@nestjs/common";
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
import { Request, Response, NextFunction } from "express";

@Injectable()
export class CsrfMiddleware implements NestMiddleware{
  private csrfProtection;

  constructor() {
    this.csrfProtection = csurf({ cookie: true });
  }

  use(req: Request, res: Response, next: NextFunction) {
     cookieParser()(req, res, () => {
      this.csrfProtection(req, res, (err) => {
        if (err) {
          // CSRF 토큰 오류 처리
          return res.status(403).json({ message: 'Invalid CSRF token' });
        }
        // CSRF 토큰을 클라이언트에 전송
        res.cookie('XSRF-TOKEN', req.csrfToken(),
          { httpOnly: true, sameSite: 'none', secure: true });
        next();
      });
    });
  }
}