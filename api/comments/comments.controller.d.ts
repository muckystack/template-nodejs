import { CommentsService } from './comments.service';
export declare class CommentsController {
    private readonly commentsService;
    constructor(commentsService: CommentsService);
    findAll(): Promise<import("./entities/comment.entity").Comment[]>;
}
