export const computers = [
  {
    id: 'main-pc',
    name: 'Propstgonz@B650',
    ascii: `
 lllllllllllllll   lllllllllllllll  Propstgonz@B650
 lllllllllllllll   lllllllllllllll  ------------
 lllllllllllllll   lllllllllllllll  OS: Windows 11 Pro [64 bits]
 lllllllllllllll   lllllllllllllll  Host: ASUS System Product Name
 lllllllllllllll   lllllllllllllll  Kernel: 10.0.26100.0
 lllllllllllllll   lllllllllllllll  Motherboard: TUF GAMING B650M-PLUS
 lllllllllllllll   lllllllllllllll  Uptime: 2 days 13 hours 12 minutes
                                    Packages: (none)
 lllllllllllllll   lllllllllllllll  Shell: PowerShell v7.5.1
 lllllllllllllll   lllllllllllllll  Resolution: 2560x1440, 1920x1080
 lllllllllllllll   lllllllllllllll  Terminal: svchost
 lllllllllllllll   lllllllllllllll  CPU: AMD Ryzen 5 7600X
 lllllllllllllll   lllllllllllllll  GPU: AMD Radeon RX 7700 XT
 lllllllllllllll   lllllllllllllll  Memory: 20.49 GiB / 31.66 GiB (64%)
 lllllllllllllll   lllllllllllllll  Disk (C:): 149 GiB / 930 GiB (16%)
    `,
    specs: {
      Host: 'ASUS System Product Name',
      OS: 'Windows 11 Pro (64-bit)',
      Kernel: '10.0.26100.0',
      Motherboard: 'TUF GAMING B650M-PLUS',
      Uptime: '2d 13h 12m',
      Shell: 'PowerShell v7.5.1',
      Resolution: '2560x1440, 1920x1080',
      Terminal: 'svchost',
      CPU: 'AMD Ryzen 5 7600X',
      GPU: 'AMD Radeon RX 7700 XT',
      RAM: '20.49 / 31.66 GiB (64%)',
      Disk: '149 / 930 GiB (16%)',
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
