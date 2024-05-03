import { Box, Button, Grid, styled, useTheme, Typography } from '@mui/material';
import Carousel from './Carousel';
import { H1, H6, Paragraph } from '@/components/Typography';
import Image from 'next/image';
// styled components
const StyledBox = styled(Box)({
	marginBottom: 0,
	overflow: 'hidden',
	'& .carousel-dot': {
		left: 0,
		right: 0,
		bottom: '30px',
		margin: 'auto',
		position: 'absolute',
	},
});
const Container = styled(Box)(({ theme,backgroundimageurl  }) => ({
	minHeight: 450,
	display: 'flex',
	alignItems: 'center',
	// backgroundImage: `url(${backgroundimageurl })`,
	backgroundSize: 'cover',
	backgroundRepeat: 'no-repeat',
	backgroundPosition: 'center',
	transition: 'all 0.3s',
	[theme.breakpoints.down('md')]: {
		height: '60vh',
	},
	[theme.breakpoints.down('sm')]: {
		height: '50vh',
	},
}));
const BackgroundImage = styled(Image)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
const StyledGrid = styled(Grid)({
	maxWidth: 1280,
	margin: 'auto',
	position: 'relative',
	alignItems: 'center',
	padding: '2rem 0px 5rem 0px',
});
const GridItemOne = styled(Grid)(({ theme }) => ({
	padding: 20,
	'& h1': {
		fontSize: 60,
	},
	[theme.breakpoints.down('md')]: {
		'& h1': {
			fontSize: 50,
		},
	},
	[theme.breakpoints.down('sm')]: {
		textAlign: 'center',
		'& h1': {
			fontSize: 40,
		},
	},
}));
const StyledButton = styled(Button)({
	color: '#fff',
	fontWeight: 400,
	fontSize: '16px',
	borderRadius: 0,
	padding: '8px 30px',
});
const TextBox = styled(Box)(({ theme }) => ({
	marginTop: 5,
	marginBottom: 40,
	paddingRight: 100,
	[theme.breakpoints.down('md')]: {
		paddingRight: 0,
	},
}));

// =============================================================================

// =============================================================================

const Section1 = ({ mainCarouselData }) => {
	const { palette } = useTheme();
	return (
		<StyledBox id="carouselBox">
			<Carousel
				spacing="0px"
				showDots={true}
				autoPlay={true}
				visibleSlides={1}
				showArrow={false}
				dotClass="carousel-dot"
				dotColor="primary"
				totalSlides={2}
			>
				{mainCarouselData.map((item) => (
					<Container key={item.id}>
							<BackgroundImage priority={true} src={item.imgUrl} layout="fill" />
						<StyledGrid container>
							<GridItemOne item lg={6} md={8} xs={12}>
								<Typography style={{ fontSize: 35, fontWeight: 40 }} sx={{ color: 'white' }}>
									{' '}
							{item.title}
								</Typography>
								<Typography
									variant="h1"
									style={{ fontSize: 80, fontWeight: 700 }}
									sx={{ color: 'white' }}
								>
									 {item.subTitle}
								</Typography>

								<Typography
									style={{ fontSize: 20, fontWeight: 10 }}
									variant="body1"
									sx={{ color: 'white', lineHeight: 2 }}
								>
									{item.description}
								</Typography>

								{/* <StyledButton color="primary" variant="contained">
									{item.buttonText}
								</StyledButton> */}
							</GridItemOne>
						</StyledGrid>
					</Container>
				))}
			</Carousel>
		</StyledBox>
	);
};
export default Section1;
