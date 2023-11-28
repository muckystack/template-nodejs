import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';
export declare class CommentsService {
    private readonly commentRepository;
    constructor(commentRepository: Repository<Comment>);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment>;
    remove(id: number): Promise<void>;
    deleteAllComments(): Promise<import("typeorm").DeleteResult>;
    private handleDBErrors;
}
