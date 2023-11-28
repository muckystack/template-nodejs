"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const comment_entity_1 = require("./entities/comment.entity");
let CommentsService = class CommentsService {
    constructor(commentRepository) {
        this.commentRepository = commentRepository;
    }
    async create(createCommentDto) {
        try {
            const commentData = __rest(createCommentDto, []);
            const comment = this.commentRepository.create(Object.assign({}, commentData));
            await this.commentRepository.save(comment);
            return comment;
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    async findAll() {
        try {
            const comments = await this.commentRepository.find({
                relations: {
                    doctor: {
                        user: true,
                    },
                },
            });
            return comments;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async findOne(id) {
        try {
            const comments = await this.commentRepository.findOneBy({ id });
            return comments;
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async update(id, updateCommentDto) {
        try {
            const comment = await this.commentRepository.findOne({ where: { id } });
            if (!comment) {
                throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
            }
            const dataUpdate = __rest(updateCommentDto, []);
            this.commentRepository.merge(comment, dataUpdate);
            return await this.commentRepository.save(comment);
        }
        catch (error) {
            return this.handleDBErrors(error);
        }
    }
    async remove(id) {
        const comment = await this.findOne(id);
        if (!comment) {
            throw new common_1.NotFoundException(`No se encontro usuario con el id: ${id}`);
        }
        await this.commentRepository.remove(comment);
    }
    async deleteAllComments() {
        const query = this.commentRepository.createQueryBuilder('comments');
        try {
            return await query.delete().where({}).execute();
        }
        catch (error) {
            this.handleDBErrors(error);
        }
    }
    handleDBErrors(err) {
        if (err.code === '23505')
            throw new common_1.BadRequestException(err.detail);
        console.error('====>>', err);
        throw new common_1.InternalServerErrorException('Please check server logs');
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(comment_entity_1.Comment)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map