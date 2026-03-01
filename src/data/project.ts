export interface ProjectItem {
	id?: number; // 唯一标识符
	title: string
	title_en?: string
	description?: string
	date?: string		//发布日期
	detail?: string //图片内容路径
  	url?: string  //上线链接
	tags?: string[]
	cover?: string[]
}
export const projectItems: ProjectItem[] = [

	{
		title: "HT10商品详情页",
    title_en: "HT10 Product Detail",
		date: "2026.03.01",
    detail: "/detail/ht10/",
    url: "",
    cover: ['5-7-ht10/5-ht10-1.jpg','5-7-ht10/6-ht10-2.jpg','5-7-ht10/7-ht10-3.jpg',],
		tags: ['电商', '商品详情页']
	},		
	{
		title: "HT12商品详情页",
    title_en: "HT12 Product Detail",
		date: "2026.03.01",
    detail: "/detail/ht12/",
    url: "",
    cover: ['8-10-ht12/08-ht12-amazon-1.jpg','8-10-ht12/09-ht12-amazon-2.jpg','8-10-ht12/10-ht12-amazon-3.jpg',],
		tags: ['电商', '商品详情页']
	},	
	{
		title: "H3 PRO商品详情页",
    title_en: "H3 PRO Product Detail",
		date: "2026.03.01",
    detail: "/detail/h3-pro/",
    url: "",
    cover: ['11-13-h3pro/11-h3pro-amazon-jp-1.jpg','11-13-h3pro/12-h3pro-amazon-jp-2.jpg','11-13-h3pro/13-h3pro-amazon-jp-3.jpg',],
		tags: ['电商', '商品详情页']
	},	
	{
		title: "QT31商品详情页",
    title_en: "QT31 Product Detail",
		date: "2026.03.01",
    detail: "/detail/qt31/",
    url: "",
    cover: ['14-16-qt31/14-qt31-amazon-1.jpg','14-16-qt31/15-qt31-amazon-2.jpg','14-16-qt31/16-qt31-amazon-3.jpg',],
		tags: ['电商', '商品详情页']
	},	
	{
		title: "CT02商品详情页",
    title_en: "CT02 Product Detail",
		date: "2026.03.01",
    detail: "/detail/ct02/",
    url: "",
    cover: ['17-19-ct02/17-ct02-1.jpg','17-19-ct02/18-ct02-2.jpg','17-19-ct02/19-ct02-3.jpg',],
		tags: ['电商', '商品详情页']
	},
	{
		title: "C4商品详情页",
    title_en: "C4 Product Detail",
		date: "2026.03.01",
    detail: "/detail/c4/",
    url: "",
    cover: ['20-22-c4/20-c4-detail-page-1.jpg','20-22-c4/21-c4-detail-page-2.jpg','20-22-c4/22-c4-detail-page-3.jpg',],
		tags: ['电商', '商品详情页']
	},
	{
		title: "H4GM商品详情页",
    title_en: "H4GM Product Detail",
		date: "2026.03.01",
    detail: "/detail/h4gm/",
    url: "",
    cover: ['23-25-h4gm/23-h4gm-1.jpg','23-25-h4gm/24-h4gm-2.jpg','23-25-h4gm/25-h4gm-3.jpg',],
		tags: ['电商', '商品详情页']
	},






	{
		title: "品牌建设视觉",
    title_en: "Brand",
		date: "2026.03.01",
    detail: "/detail/brand/",
    url: "",
    cover: ['44-48-brand/44-contents-02.jpg','44-48-brand/45-brand-1-2024.jpg','44-48-brand/46-brand-2-2024.jpg','44-48-brand/47-brand-3-2024.jpg',],
		tags: ['电商', '商品详情页']
	},
	{
		title: "品牌建设视觉",
    title_en: "Brand",
		date: "2026.03.01",
    detail: "/detail/brand/",
    url: "",
    cover: ['44-48-brand/44-contents-02.jpg','44-48-brand/45-brand-1-2024.jpg','44-48-brand/46-brand-2-2024.jpg','44-48-brand/47-brand-3-2024.jpg',],
		tags: ['电商', '商品详情页']
	},
	{
		title: "品牌营销物料",
    title_en: "Marketing",
		date: "2026.03.01",
    detail: "/detail/marketing/",
    url: "",
    cover: ['49-56-marketing/49-contents-03.jpg','49-56-marketing/50-marketing-1-2024.jpg','49-56-marketing/51-marketing-2-2024.jpg','49-56-marketing/52-marketing-3-2023.jpg','49-56-marketing/53-marketing-4-2024.jpg',],
		tags: ['电商', '商品详情页']
	},






	


];

