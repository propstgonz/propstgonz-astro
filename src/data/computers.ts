export const computers = [
  {
    id: 'main-pc',
    name: 'Propstgonz@B650',
    ascii: `
             .',;::::;,'.                 propstgonz@B650-L
         .';:cccccccccccc:;,.             -----------------
      .;cccccccccccccccccccccc;.          OS: Fedora Linux 43 (KDE Plasma Desktop Edition) x86_64
    .:cccccccccccccccccccccccccc:.        Host: B650 EAGLE (Default string-CF)
  .;ccccccccccccc;.:dddl:.;ccccccc;.      Kernel: Linux 6.17.12-300.fc43.x86_64
 .:ccccccccccccc;OWMKOOXMWd;ccccccc:.     Uptime: 35 mins
.:ccccccccccccc;KMMc;cc;xMMc;ccccccc:.    Packages: 2896 (rpm), 11 (flatpak)
,cccccccccccccc;MMM.;cc;;WW:;cccccccc,    Shell: zsh 5.9
:cccccccccccccc;MMM.;cccccccccccccccc:    Display (PHL 243V7): 1920x1080 @ 75 Hz in 24" [External]
:ccccccc;oxOOOo;MMM000k.;cccccccccccc:    Display (Odyssey G5): 2560x1440 @ 144 Hz in 27" [External] *
cccccc;0MMKxdd:;MMMkddc.;cccccccccccc;    Display (2D FHD LG TV): 1920x1080 @ 60 Hz in 23" [External]
ccccc;XMO';cccc;MMM.;cccccccccccccccc'    DE: KDE Plasma 6.5.4
ccccc;MMo;ccccc;MMW.;ccccccccccccccc;     WM: KWin (Wayland)
ccccc;0MNc.ccc.xMMd;ccccccccccccccc;      WM Theme: Layan
cccccc;dNMWXXXWM0:;cccccccccccccc:,       Theme: Breeze (Dark) [Qt], Breeze-Dark [GTK2], Breeze [GTK3]
cccccccc;.:odl:.;cccccccccccccc:,.        Icons: Reversal-orange-dark [Qt], breeze-dark [GTK2], Reversal-orange-dark [GTK3/4]
ccccccccccccccccccccccccccccc:'.          Font: Noto Sans (10pt) [Qt], Noto Sans (10pt) [GTK2/3/4]
:ccccccccccccccccccccccc:;,..             Cursor: volantes (24px)
 ':cccccccccccccccc::;,.                  Terminal: tilix 1.9.6
                                          Terminal Font: Monospace (11pt)
                                          CPU: AMD Ryzen 5 7600X (12) @ 5.46 GHz
                                          GPU: AMD Radeon RX 7700 XT [Discrete]
                                          Memory: 7.78 GiB / 30.95 GiB (25%)
                                          Swap: 0 B / 8.00 GiB (0%)
                                          Disk (/): 24.17 GiB / 335.37 GiB (7%) - ext4
                                          Disk (/home): 308.06 GiB / 915.80 GiB (34%) - ext4
                                          Disk (/media/hdd): 1.36 TiB / 1.82 TiB (75%) - fuseblk
                                          Disk (/media/intenso): 536.60 GiB / 937.82 GiB (57%) - ext4
                                          Local IP (enp8s0): 192.168.1.117/24
                                          Locale: en_GB.UTF-8
    `,
    specs: {
      Host: 'B650 EAGLE (Default string-CF)',
      OS: 'Fedora Linux 43 (KDE Plasma Desktop Edition) x86_64',
      Kernel: 'Linux 6.17.12-300.fc43.x86_64',
      Motherboard: 'Gigabyte B650 EAGLE',
      Uptime: '35 mins',
      Shell: 'zsh 5.9',
      Resolution: '2560x1440 @144Hz, 1920x1080 @75Hz, 1920x1080 @60Hz',
      Terminal: 'tilix 1.9.6',
      CPU: 'AMD Ryzen 5 7600X',
      GPU: 'AMD Radeon RX 7700 XT',
      RAM: '7.78 / 30.95 GiB (25%)',
      Disk: '24.17 / 335.37 GiB (/) · 308.06 / 915.80 GiB (/home)'
    },
  },
  {
    id: 'laptop',
    name: 'propstgonz@E5470',
    ascii: `
               .',;::::;,'.              propstgonz@E5470
         .';:cccccccccccc:;,.            ----------------- 
      .;cccccccccccccccccccccc;.         OS: Fedora Linux 43 (KDE Plasma Desktop)
    .:cccccccccccccccccccccccccc:.       Host: Latitude E5470
  .;ccccccccccccc;.:dddl:.;ccccccc;.     Kernel: 6.17.12-300.fc43.x86_64 
 .:ccccccccccccc;OWMKOOXMWd;ccccccc:.    Uptime: 1 hour, 8 mins 
.:ccccccccccccc;KMMc;cc;xMMc;ccccccc:.   Packages: 2544 (rpm), 18 (flatpak) 
,cccccccccccccc;MMM.;cc;;WW:;cccccccc,   Shell: zsh 5.9 
:cccccccccccccc;MMM.;cccccccccccccccc:   Resolution: 1366x768 
:ccccccc;oxOOOo;MMM0OOk.;cccccccccccc:   DE: Plasma 6.5.4 (Wayland) 
cccccc;0MMKxdd:;MMMkddc.;cccccccccccc;   WM: kwin_wayland_wr 
ccccc;XM0';cccc;MMM.;cccccccccccccccc'   Theme: Breeze-Dark [GTK2], Breeze [GTK 
ccccc;MMo;ccccc;MMW.;ccccccccccccccc;    Icons: Tela-ubuntu-dark [GTK2/3] 
ccccc;0MNc.ccc.xMMd;ccccccccccccccc;     Terminal: tilix 
cccccc;dNMWXXXWM0:;cccccccccccccc:,      CPU: Intel i5-6300U (4) @ 3.000GHz 
cccccccc;.:odl:.;cccccccccccccc:,.       GPU: Intel Skylake GT2 [HD Graphics 520] 
:cccccccccccccccccccccccccccc:'.         Memory: 5449MiB / 7816MiB 
.:cccccccccccccccccccccc:;,..
  '::cccccccccccccc::;,.
    `,
    specs: {
      Host: 'Latitude E5470',
      OS: 'Fedora Linux 43',
      Kernel: '6.17.12',
      Uptime: '1h 8m',
      Packages: '2544 (rpm), 18 (flatpak)',
      Shell: 'zsh 5.9',
      Resolution: '1366x768',
      DE: 'Plasma 6.5.4 (Wayland)',
      WM: 'kwin_wayland_wr',
      Terminal: 'tilix',
      CPU: 'Intel i5-6300U (4) @ 3.0GHz',
      GPU: 'Intel Skylake GT2 [HD Graphics 520]',
      RAM: '5.4 / 7.6 GiB',
    },
  },
  {
    id: 'server',
    name: 'propstgonz@propstgserver',
    ascii: `
              .',;::::;,'.                propstgonz@propstgserver
          .';:cccccccccccc:;,.            ------------------------
        .;cccccccccccccccccccccc;.         OS: Fedora Linux 43 (Server Edition) x86_64
      .:cccccccccccccccccccccccccc:.       Host: JINGSHA X79SE PLUS
    .;ccccccccccccc;.:dddl:.;ccccccc;.     Kernel: 6.17.10-300.fc43.x86_64
  .:ccccccccccccc;OWMKOOXMWd;ccccccc:.     Uptime: 18 hours, 52 mins
  .:ccccccccccccc;KMMc;cc;xMMc;ccccccc:.   Packages: 927 (rpm)
  ,cccccccccccccc;MMM.;cc;;WW:;cccccccc,   Shell: zsh 5.9
  :cccccccccccccc;MMM.;cccccccccccccccc:   Terminal: /dev/pts/0
  :ccccccc;oxOOOo;MMM0OOk.;cccccccccccc:   CPU: Intel Xeon E5-2660 v2 (20) @ 3.000GHz
  cccccc;0MMKxdd:;MMMkddc.;cccccccccccc;   GPU: NVIDIA GeForce GTX 750
  ccccc;XM0';cccc;MMM.;cccccccccccccccc'   Memory: 26707MiB / 31993MiB
  ccccc;MMo;ccccc;MMW.;ccccccccccccccc;
  ccccc;0MNc.ccc.xMMd;ccccccccccccccc;
  cccccc;dNMWXXXWM0:;cccccccccccccc:,
  cccccccc;.:odl:.;cccccccccccccc:,.
  :cccccccccccccccccccccccccccc:'.
  .:cccccccccccccccccccccc:;,..
    '::cccccccccccccc::;,.      
    `,
    specs: {
      Host: 'JINGSHA X79SE PLUS',
      OS: 'Fedora Linux 43 (Server Edition) x86_64',
      Kernel: '6.17.10-300.fc43.x86_64',
      Uptime: '18h 52m',
      Packages: '927 (rpm)',
      Shell: 'zsh 5.9',
      Terminal: '/dev/pts/0',
      CPU: 'Intel Xeon E5-2660 v2 (20) @ 3.0GHz',
      GPU: 'NVIDIA GeForce GTX 750',
      RAM: '26.7 / 31.9 GiB',
    },
  },
];
