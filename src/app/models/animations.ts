import { trigger, transition, style, animate } from '@angular/animations';

export const fadeIn = 
    trigger('fadeIn', [
        transition('void => *', [
            style({ opacity:0 }),
            animate(1000)
        ])
    ])

export const slideInLeft =
    trigger('slideInLeft', [
        transition('void => *', [
            style({ 
                opacity: 0,
                transform: 'translateX(-100px)'
            }),
            animate('1.5s cubic-bezier(0.33, 1, 0.68, 1)')
        ])
    ])