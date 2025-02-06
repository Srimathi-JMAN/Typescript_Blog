export interface CommentInterface{
    description: string;
}

export interface BlogInterface{
    id:number;
    title:string;
    content:string;
    comments?:CommentInterface[];
}

export interface BlogListInterface{
    blogs:BlogInterface[];
}