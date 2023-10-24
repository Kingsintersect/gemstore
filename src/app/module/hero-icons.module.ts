import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconsModule, provideNgIconsConfig } from '@ng-icons/core';
import { 

  heroCog6Tooth,
  heroQuestionMarkCircle,
  heroInformationCircle,
  heroBuildingOffice,
  heroListBullet,
  heroDocumentPlus,
  heroChartBarSquare,
  heroChartPie,
  heroCircleStack,


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
  heroShoppingCart,
  heroShoppingBag,
  heroCog8Tooth,
  heroCurrencyDollar,
  heroEnvelope,
  heroEnvelopeOpen,
  heroEye,
  heroEyeSlash,
  heroFolder,heroGif,heroGlobeAlt,heroHome,heroHeart,heroHandThumbUp,heroHandThumbDown,heroLink,heroMinus,heroPhone,heroPhoto,heroUser,heroUserGroup,heroUserMinus,heroUserPlus,heroXMark,heroXCircle,heroWifi,
} from '@ng-icons/heroicons/outline';
import { 
  heroShoppingCartSolid,
  heroBars3Solid,
  heroXMarkSolid,
} from "@ng-icons/heroicons/solid";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgIconsModule.withIcons(
      {
        
        heroCog6Tooth,
        heroQuestionMarkCircle,
        heroInformationCircle,
        heroBuildingOffice,
        heroListBullet,
        heroDocumentPlus,
        heroChartBarSquare,
        heroChartPie,
        heroCircleStack,




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
        heroShoppingCart,
        heroCog8Tooth,
        heroCurrencyDollar,
        heroEnvelope,
        heroEnvelopeOpen,
        heroEye,
        heroEyeSlash,
        heroFolder,heroGif,heroGlobeAlt,heroHome,heroHeart,heroHandThumbUp,heroHandThumbDown,heroLink,heroMinus,heroPhone,heroPhoto,heroUser,heroUserGroup,heroUserMinus,heroUserPlus,heroXMark,heroXCircle,heroWifi,


        heroShoppingCartSolid,
        heroBars3Solid,
        heroXMarkSolid,
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
