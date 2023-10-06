/*
ISC License

Copyright (c) for portions of Lucide are held by Cole Bemis 2013-2022 as part of Feather (MIT). All other copyright (c) for Lucide are held by Lucide Contributors 2022.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted, provided that the above
copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
*/
import type { ComponentProps } from 'solid-js'

type IconProps = ComponentProps<'svg'>

const Icon = (props: IconProps) => (
  <svg
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='none'
    stroke='currentColor'
    stroke-width='2'
    stroke-linecap='round'
    stroke-linejoin='round'
    {...props}
  />
)
type IconType = typeof Icon

const Icons = {
  arrowDown: (props: IconProps) => (
    <Icon {...props}>
      <line x1='12' x2='12' y1='5' y2='19' />
      <polyline points='19 12 12 19 5 12' />
    </Icon>
  ),
  arrowDownRight: (props: IconProps) => (
    <Icon {...props}>
      <line x1='7' x2='17' y1='7' y2='17' />
      <polyline points='17 7 17 17 7 17' />
    </Icon>
  ),
  arrowRight: (props: IconProps) => (
    <Icon {...props}>
      <line x1='5' x2='19' y1='12' y2='12' />
      <polyline points='12 5 19 12 12 19' />
    </Icon>
  ),
  arrowRightCircle: (props: IconProps) => (
    <Icon {...props}>
      <path d='M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
    </Icon>
  ),
  arrowUp: (props: IconProps) => (
    <Icon {...props}>
      <line x1='12' x2='12' y1='19' y2='5' />
      <polyline points='5 12 12 5 19 12' />
    </Icon>
  ),
  arrowUpRight: (props: IconProps) => (
    <Icon {...props}>
      <line x1='7' x2='17' y1='17' y2='7' />
      <polyline points='7 7 17 7 17 17' />
    </Icon>
  ),

  barsBottomRight: (props: IconProps) => (
    <Icon {...props}>
      <path d='M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25' />
    </Icon>
  ),
  bell: (props: IconProps) => (
    <Icon {...props}>
      <path d='M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9' />
      <path d='M10.3 21a1.94 1.94 0 0 0 3.4 0' />
    </Icon>
  ),

  check: (props: IconProps) => (
    <Icon {...props}>
      <polyline points='20 6 9 17 4 12' />
    </Icon>
  ),
  chevronDown: (props: IconProps) => (
    <Icon {...props}>
      <polyline points='6 9 12 15 18 9' />
    </Icon>
  ),
  chevronLeft: (props: IconProps) => (
    <Icon {...props}>
      <polyline points='15 18 9 12 15 6' />
    </Icon>
  ),
  chevronRight: (props: IconProps) => (
    <Icon {...props}>
      <polyline points='9 18 15 12 9 6' />
    </Icon>
  ),
  chevronUp: (props: IconProps) => (
    <Icon {...props}>
      <polyline points='18 15 12 9 6 15' />
    </Icon>
  ),
  chevronsLeft: (props: IconProps) => (
    <Icon {...props}>
      <polyline points='11 17 6 12 11 7' />
      <polyline points='18 17 13 12 18 7' />
    </Icon>
  ),
  chevronsRight: (props: IconProps) => (
    <Icon {...props}>
      <polyline points='13 17 18 12 13 7' />
      <polyline points='6 17 11 12 6 7' />
    </Icon>
  ),
  chevronsUpDown: (props: IconProps) => (
    <Icon {...props}>
      <path d='m7 15 5 5 5-5' />
      <path d='m7 9 5-5 5 5' />
    </Icon>
  ),
  circle: (props: IconProps) => (
    <Icon {...props}>
      <circle cx='12' cy='12' r='10' />
    </Icon>
  ),
  close: (props: IconProps) => (
    <Icon {...props}>
      <line x1='18' x2='6' y1='6' y2='18' />
      <line x1='6' x2='18' y1='6' y2='18' />
    </Icon>
  ),
  clock: (props: IconProps) => (
    <Icon {...props}>
      <path d='M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z' />
    </Icon>
  ),
  design: (props: IconProps) => (
    <Icon {...props}>
      <path
        fill='currentColor'
        d='M9 17.41V27h9.59l-2-2H11v-5.59l-2-2z'
        class='clr-i-outline clr-i-outline-path-1'
      ></path>
      <path
        fill='currentColor'
        d='M34.87 32.29L32 29.38V32H4v-4.15h2v-1.6H4V19.6h2V18H4v-6.4h2V10H4V4.41l15.94 15.85v-2.82L3.71 1.29A1 1 0 0 0 2 2v31a1 1 0 0 0 1 1h31.16a1 1 0 0 0 .71-1.71Z'
        class='clr-i-outline clr-i-outline-path-2'
      ></path>
      <path
        fill='currentColor'
        d='M24 30h4a2 2 0 0 0 2-2V8.7l-2.3-4.23a2 2 0 0 0-1.76-1a2 2 0 0 0-1.76 1.08L22 8.72V28a2 2 0 0 0 2 2Zm0-20.8l1.94-3.77L28 9.21V24h-4Zm0 16.43h4v2.44h-4Z'
        class='clr-i-outline clr-i-outline-path-3'
      ></path>
      <path fill='none' d='M0 0h36v36H0z'></path>
    </Icon>
  ),
  envelope: (props: IconProps) => (
    <Icon {...props}>
      <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' />
    </Icon>
  ),
  eyeOff: (props: IconProps) => (
    <Icon {...props}>
      <path d='M9.88 9.88a3 3 0 1 0 4.24 4.24' />
      <path d='M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68' />
      <path d='M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61' />
      <line x1='2' x2='22' y1='2' y2='22' />
    </Icon>
  ),

  link: (props: IconProps) => (
    <Icon {...props}>
      <path d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244' />
    </Icon>
  ),
  logo: (props: IconProps) => (
    <Icon {...props}>
      <circle cx='12' cy='12' r='10' />
    </Icon>
  ),
  moon: (props: IconProps) => (
    <Icon {...props}>
      <path d='M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z' />
    </Icon>
  ),
  pencilSquare: (props: IconProps) => (
    <Icon {...props}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10'
      />
    </Icon>
  ),
  phone: (props: IconProps) => (
    <Icon {...props}>
      <path d='M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0l6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z' />
    </Icon>
  ),
  solid: (props: IconProps) => (
    <Icon {...props}>
      <path d='M2 17.5c4.667 3 8 4.5 10 4.5c2.5 0 4-1.5 4-3.5S14.5 15 12 15c-2 0-5.333.833-10 2.5z' />
      <path d='M5 13.5c4.667-1.667 8-2.5 10-2.5c2.5 0 4 1.5 4 3.5c0 .738-.204 1.408-.588 1.96l-2.883 3.825M22 6.5C18 3.5 14 2 12 2c-2.04 0-2.618.463-3.419 1.545M2 17.5l3-4m17-7l-3 4M8.581 3.545L5.628 7.256' />
      <path d='M7.416 12.662C5.906 12.186 5 11.183 5 9.5C5 7 6.5 6 9 6c1.688 0 5.087 1.068 8.198 3.204A114.76 114.76 0 0 1 19 10.5l-2.302.785' />
    </Icon>
  ),
  sidebarOpen: (props: IconProps) => (
    <Icon {...props}>
      <rect width='18' height='18' x='3' y='3' rx='2' ry='2' />
      <path d='M9 3v18' />
      <path d='m14 9 3 3-3 3' />
    </Icon>
  ),
  slidersHorizontal: (props: IconProps) => (
    <Icon {...props}>
      <line x1='21' x2='14' y1='4' y2='4' />
      <line x1='10' x2='3' y1='4' y2='4' />
      <line x1='21' x2='12' y1='12' y2='12' />
      <line x1='8' x2='3' y1='12' y2='12' />
      <line x1='21' x2='16' y1='20' y2='20' />
      <line x1='12' x2='3' y1='20' y2='20' />
      <line x1='14' x2='14' y1='2' y2='6' />
      <line x1='8' x2='8' y1='10' y2='14' />
      <line x1='16' x2='16' y1='18' y2='22' />
    </Icon>
  ),
  sortAsc: (props: IconProps) => (
    <Icon {...props}>
      <path d='m3 8 4-4 4 4' />
      <path d='M7 4v16' />
      <path d='M11 12h4' />
      <path d='M11 16h7' />
      <path d='M11 20h10' />
    </Icon>
  ),
  sun: (props: IconProps) => (
    <Icon {...props}>
      <circle cx='12' cy='12' r='4' />
      <path d='M12 2v2' />
      <path d='M12 20v2' />
      <path d='m4.93 4.93 1.41 1.41' />
      <path d='m17.66 17.66 1.41 1.41' />
      <path d='M2 12h2' />
      <path d='M20 12h2' />
      <path d='m6.34 17.66-1.41 1.41' />
      <path d='m19.07 4.93-1.41 1.41' />
    </Icon>
  ),

  twitter: (props: IconProps) => (
    <Icon {...props}>
      <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
    </Icon>
  ),
  users: (props: IconProps) => (
    <Icon {...props}>
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z'
      />
    </Icon>
  ),
}

export { Icons }
export type { IconType as Icon }
