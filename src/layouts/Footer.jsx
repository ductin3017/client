import { FaFacebook, FaInstagram, FaPhone } from "react-icons/fa";

const Footer = () => {
	return (
		<div className="grid grid-cols-3 bg-black p-[25px] items-center max-lg:grid-cols-1 max-lg:pb-[100px] max-lg:gap-4 max-md:grid-cols-1 text-white">
			{/* Phần 1: Thông điệp */}
			<div className="px-5 max-lg:p-0">
				<span className="text-[#999999]">
					<b className="text-[21px]">
						Trang web chỉ phục vụ cho mục đích học tập
					</b>
				</span>
			</div>

			{/* Phần 2: Mạng xã hội và số điện thoại */}
			<div className="flex flex-col gap-4 items-start px-40">
				<a
					href="https://www.facebook.com"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-[#999999] gap-2"
				>
					<FaFacebook size={35} color="#3b5998" />
					<span>bookstore fb</span>
				</a>
				<a
					href="https://www.instagram.com"
					target="_blank"
					rel="noopener noreferrer"
					className="flex items-center text-[#999999] gap-2"
				>
					<FaInstagram size={35} color="#E4405F" />
					<span>bookstore insta</span>
				</a>
				<a
					href="tel:+123456789"
					className="flex items-center text-[#999999] gap-2"
				>
					<FaPhone size={35} color="#25D366" />
					<span>bookstore phone</span>
				</a>
			</div>

			{/* Phần 3: Địa chỉ */}
			<div className="px-5 max-lg:p-0 text-[#999999]">
				<b className="text-[20px]">Địa chỉ:</b>
				<p>123 Đường ABC, Quận 1, TP. HCM</p>
				<p>Chi nhánh 1: 456 Đường XYZ, Quận 2, TP. HCM</p>
				<p>Chi nhánh 2: 789 Đường MNO, Quận 3, TP. HCM</p>
			</div>
		</div>
	);
};

export default Footer;
