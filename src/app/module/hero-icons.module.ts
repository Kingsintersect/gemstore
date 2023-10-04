import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { 
  heroCheck, 
  heroUsers, 
  heroCheckCircle,
  heroAtSymbol,
  heroAdjustmentsHorizontal,
  heroArrowUp,heroArrowDown,heroArrowLeft,heroArrowRight,heroArrowSmallUp, heroArrowSmallDown,
  heroBackspace,
  heroBars4,
  heroCalendar,
  heroCalculator,
  heroCamera,
  heroChatBubbleLeftRight,
  heroChatBubbleOvalLeftEllipsis,
  heroChevronLeft,
  heroChevronRight,
  heroChevronUp,
  heroChevronDown,
  heroChevronUpDown,
  heroClock,
  heroCog8Tooth,
  heroCurrencyDollar,
  heroEnvelope,
  heroEnvelopeOpen,
  heroEye,
  heroEyeSlash,
  heroFolder,heroGif,heroGlobeAlt,heroHome,heroHeart,heroHandThumbUp,heroHandThumbDown,heroLink,heroMinus,heroPhone,heroPhoto,heroUser,heroUserGroup,heroUserMinus,heroUserPlus,heroXMark,heroXCircle,heroWifi,
} from '@ng-icons/heroicons/outline';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule.withIcons(
      {
        heroUsers,
        heroCheckCircle,
        heroCheck,
        heroAtSymbol,
        heroAdjustmentsHorizontal,
        heroArrowUp,heroArrowDown,heroArrowLeft,heroArrowRight,heroArrowSmallUp, heroArrowSmallDown,
        heroBackspace,
        heroBars4,
        heroCalendar,
        heroCalculator,
        heroCamera,
        heroChatBubbleLeftRight,
        heroChatBubbleOvalLeftEllipsis,
        heroChevronLeft,
        heroChevronRight,
        heroChevronUp,
        heroChevronDown,
        heroChevronUpDown,
        heroClock,
        heroCog8Tooth,
        heroCurrencyDollar,
        heroEnvelope,
        heroEnvelopeOpen,
        heroEye,
        heroEyeSlash,
        heroFolder,heroGif,heroGlobeAlt,heroHome,heroHeart,heroHandThumbUp,heroHandThumbDown,heroLink,heroMinus,heroPhone,heroPhoto,heroUser,heroUserGroup,heroUserMinus,heroUserPlus,heroXMark,heroXCircle,heroWifi,
      }
    ),
  ],
  exports: [
    NgIconsModule,
  ],
  providers: [
    provideNgIconsConfig({
      size: '1.5em',
    }),
  ],
})
export class HeroIconsModule { }
