(() => {
    const template = document.createElement('template');

    template.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    height: 108px;
                    width: 108px;
                    overflow: hidden;
                    user-select: none;
                    -webkit-user-select: none;
                    contain: layout;
                }

                :host([mask="circle"]) .wrapper {
                    clip-path: url(#circle);
                }

                :host([mask="square"]) .wrapper{
                    clip-path: url(#square);
                }

                :host([mask="rounded-square"]) .wrapper {
                    clip-path: url(#rounded-square);
                }

                :host([mask="squircle"]) .wrapper {
                    clip-path: url(#squircle);
                }

                :host([mask="teardrop"]) .wrapper {
                    clip-path: url(#teardrop);
                }

                :host .wrapper,
                :host [part="foreground"],
                :host [part="background"] {
                    width: 100%;
                    height: 100%;
                }

                :host .wrapper {
                    position: relative;
                }

                :host [part="foreground"],
                :host [part="background"] {
                    position: absolute;
                }

                :host ::slotted([slot="foreground"]),
                :host ::slotted([slot="background"]) {
                    width: 100%;
                    height: 100%;
                    pointer-events: none;
                }
            </style>
            
            <svg height="0" width="0">
              <defs>
                <clipPath id="circle" clipPathUnits="objectBoundingBox">
                    <path d="M 0.500 0.833 C 0.684 0.833 0.833 0.684 0.833 0.500 C 0.833 0.316 0.684 0.167 0.500 0.167 C 0.316 0.167 0.167 0.316 0.167 0.500 C 0.167 0.684 0.316 0.833 0.500 0.833 z"/>
                </clipPath>
                <clipPath id="square" clipPathUnits="objectBoundingBox">
                    <path d="M 0.167 0.167 H 0.833 V 0.833 H 0.167 V 0.167 Z"/>
                </clipPath>
                <clipPath id="rounded-square" clipPathUnits="objectBoundingBox">
                    <path d="M 0.167 0.250 C 0.167 0.209 0.200 0.176 0.241 0.176 H 0.759 C 0.800 0.176 0.833 0.209 0.833 0.250 V 0.769 C 0.833 0.809 0.800 0.843 0.759 0.843 H 0.241 C 0.200 0.843 0.167 0.809 0.167 0.769 V 0.250 z"/>
                </clipPath>
                <clipPath id="squircle" clipPathUnits="objectBoundingBox">
                    <path d="M 0.500 0.167 C 0.233 0.167 0.167 0.233 0.167 0.500 C 0.167 0.767 0.233 0.833 0.500 0.833 C 0.767 0.833 0.833 0.767 0.833 0.500 C 0.833 0.233 0.767 0.167 0.500 0.167 z"/>
                </clipPath>
                <clipPath id="teardrop" clipPathUnits="objectBoundingBox">
                    <path d="M 0.500 0.167 C 0.684 0.167 0.833 0.316 0.833 0.500 V 0.733 C 0.833 0.789 0.789 0.833 0.733 0.833 H 0.500 C 0.316 0.833 0.167 0.684 0.167 0.500 C 0.167 0.316 0.316 0.167 0.500 0.167 z"/>
                </clipPath>
              </defs>
            </svg>
            
            <div class="wrapper">
                <div part="background">
                    <slot name="background"></slot>
                </div>
                <div part="foreground">
                    <slot name="foreground"></slot>
                </div>
            </div>
        `;

    class AdaptiveIcon extends HTMLElement {
        static get is() {
            return 'adaptive-icon';
        }

        constructor() {
            super();

            this.root = this.attachShadow({ mode: 'open' });
            this.root.appendChild(template.content.cloneNode(true));
        }

        connectedCallback() {
            // Firefox pls 😭
            if (ShadyCSS) {
                ShadyCSS.styleElement(this);
            }
        }

        set mask(value) {
            if (value) {
                this.setAttribute('mask', value);
            } else {
                this.removeAttribute('mask');
            }
        }

        get mask() {
            return this.getAttribute('mask');
        }
    }

    // Firefox pls 😭
    if (ShadyCSS) {
        ShadyCSS.prepareTemplate(template, AdaptiveIcon.is);
    }

    window.customElements.define(AdaptiveIcon.is, AdaptiveIcon);
})();
