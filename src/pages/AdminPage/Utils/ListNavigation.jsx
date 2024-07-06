import { FaUserFriends } from "react-icons/fa";
import { BiSolidCategory } from "react-icons/bi";
import { RiBook3Fill } from "react-icons/ri";
import { RiHomeOfficeFill } from "react-icons/ri";
import { IoChatboxEllipsesSharp } from "react-icons/io5";
import { AiFillBook } from "react-icons/ai";
import { FaClipboardCheck } from "react-icons/fa6";
import { FaChalkboardUser } from "react-icons/fa6";
import { FaImages } from "react-icons/fa";

const ListNavigation = [
	{
		name: "Trang chủ",
		icon: <RiHomeOfficeFill />,
		path: "/Dashboard",
	},
	{
		name: "Banner quảng cáo",
		icon: <FaImages />,
		path: "/Dashboard/Banner",
	},
	{
		name: "Sách",
		icon: <RiBook3Fill />,
		path: "/Dashboard/Product",
	},
	{
		name: "Danh mục",
		icon: <BiSolidCategory />,
		path: "/Dashboard/Category",
	},
	{
		name: "Thể loại",
		icon: <AiFillBook />,
		path: "/Dashboard/Genres",
	},
	{
		name: "Tác giả",
		icon: <FaChalkboardUser />,
		path: "/Dashboard/Author",
	},
	{
		name: "Tài khoản",
		icon: <FaUserFriends />,
		path: "/Dashboard/User",
	},
	{
		name: "Bình luận",
		icon: <IoChatboxEllipsesSharp />,
		path: "/Dashboard/Comment",
	},
	{
		name: "Đơn hàng",
		icon: <FaClipboardCheck />,
		path: "/Dashboard/Checkout",
	},
];
export default ListNavigation;
