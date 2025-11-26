
function AppFooterCopyright() {
	return (
	<div className="font-general-regular flex justify-center items-center text-center">
			<div className="text-sm text-ternary-dark dark:text-ternary-light">
				&copy; 2023 Khanh_Linh
			</div>
		</div>
	);
}




const Footer = () => {
	return (
		<section className="container mx-auto">
			<div  className="pt-0 sm:pt-0 pb-8 border-primary-light dark:border-secondary-dark">
				

				< AppFooterCopyright />
			</div>
		</section>
	);
};

export default Footer;
