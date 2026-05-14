export type PortfolioVideos = {
    id: number;
    type: "video" | "image";
    url: string;
    height: string;
};

export const PortfolioVideosSample: PortfolioVideos[] = [
    { id: 1, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/Aksitara+client.mp4', height: 'h-[400px]' },
    { id: 2, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/feroge+v1+march-26-3.mp4', height: 'h-[300px]' },
    { id: 3, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/feroge+v3+feb-26+(Vesti+shirt+combo)+4.mp4', height: 'h-[450px]' },
    { id: 4, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/Five+Ways+to+Live+a+Meaningful+Life-2.mp4', height: 'h-[420px]' },
    { id: 5, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/Maharaja+furniture+v1(2).mp4', height: 'h-[320px]' },
    { id: 6, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/Pipeline+volume+vs+progression-2.mp4', height: 'h-[400px]' },
    { id: 7, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/v4-aksitara+final+apr-26.mp4', height: 'h-[300px]' },
    { id: 8, type: 'video', url: 'https://dhigrowth-editing-website.s3.ap-south-1.amazonaws.com/Shoba+city+v1-2.mp4', height: 'h-[450px]' },
];
