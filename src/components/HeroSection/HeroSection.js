import Container from '../Container';
import Button from '../Button';
import useWindowWidth from '../../hooks/useWindowWidth';

import icons from '../../icons';
import HeroImageDesktop from '../../images/image-hero-desktop.png';
import HeroImageMobile from '../../images/image-hero-mobile.png';

const HeroSection = () => {
  const screenWidth = useWindowWidth();

  return (
    <Container>
      <div className='py-4'>
        <div className='h-full flex flex-col-reverse  items-center justify-end hero-breakpoint:gap-x-4  hero-breakpoint:items-end hero-breakpoint:flex-row hero-breakpoint:justify-around'>
          <div className='px-4 py-10 flex flex-col items-center gap-y-6 sm:gap-y-10 md:gap-y-12 hero-breakpoint:items-start hero-breakpoint:py-0'>
            <h1 className='text-3xl sm:text-5xl font-bold text-center hero-breakpoint:text-left lg:text-6xl'>
              Make <br className='hidden hero-breakpoint:block' /> Remote Work
            </h1>
            <p className=' text-neutral-gray max-w-md text-center hero-breakpoint:text-left'>
              Get your team in sync, no matter your location. Streamline
              processes, create team rituals, and watch productivity scar.
            </p>
            <div>
              <Button variant='primary'>Learn more</Button>
            </div>

            <div className='mt-6 grid grid-cols-4 gap-x-4 items-center hero-breakpoint:mt-16'>
              <img src={icons.databiz} alt='databiz logo' />
              <img src={icons.audiophile} alt='audiophile logo' />
              <img src={icons.meet} alt='meet logo' />
              <img src={icons.maker} alt='maker logo' />
            </div>
          </div>
          <div className='max-w-[610px] md:max-w-[500px]'>
            {screenWidth < 900 && (
              <img
                className='object-contain'
                src={HeroImageMobile}
                alt='a person holding a laptop'
              />
            )}
            {screenWidth >= 900 && (
              <img
                className='object-contain'
                src={HeroImageDesktop}
                alt='a person holding a laptop'
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
