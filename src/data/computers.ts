export const computers = [
  {
    id: 'main-pc',
    name: 'Propstg@B650',
    ascii: `
 lllllllllllllll   lllllllllllllll  Propstg@B650
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
      Uptime: '2d 13h',
      Shell: 'PowerShell 7.5.1',
      CPU: 'Ryzen 5 7600X',
      GPU: 'RX 7700 XT',
      RAM: '20.49 / 31.66 GiB (64%)',
      Disk: '149 / 930 GiB (16%)',
    },
  },
  {
    id: 'laptop',
    name: 'propstg@E5470',
    ascii: `
                   -\`                    propstg@E5470
                  .o+\`                   -------------
                 \`ooo/                   OS: Arch Linux x86_64
                \`+oooo:                  Host: Latitude E5470
               \`+oooooo:                 Kernel: 6.15.2-arch1-1
               -+oooooo+:                Uptime: 7 days, 3 hours, 25 mins
             \`/:-:++oooo+:               Packages: 1406 (pacman), 53 (flatpak)
            \`/++++/+++++++:              Shell: zsh 5.9
           \`/++++++++++++++:             Resolution: 1366x768
          \`/+++ooooooooooooo/\`           DE: GNOME 48.2
         ./ooosssso++osssssso+\`          WM: Mutter
        .oossssso-\`\`\`\`/ossssss+\`         WM Theme: Fluent-round-orange-Dark
       -osssssso.      :ssssssso.        Theme: Adwaita [GTK2/3]
      :osssssss/        osssso+++.       Icons: Tela-circle-black [GTK2/3]
     /ossssssss/        +ssssooo/-       Terminal: ghostty
   \`/ossssso+/:-        -:/+osssso+-     CPU: Intel i5-6300U (4) @ 3.000GHz
  \`+sso+:-\`                 \`.-/+oso:    GPU: Intel Skylake GT2 [HD Graphics 520]
 \`++:.                           \`-/+/   Memory: 5845MiB / 7604MiB
 .\`                                 \`/
    `,
    specs: {
      Host: 'Latitude E5470',
      OS: 'Arch Linux x86_64',
      Uptime: '7d 3h',
      Shell: 'zsh 5.9',
      'DE/WM': 'GNOME + Mutter',
      Resolution: '1366x768',
      CPU: 'i5-6300U @ 3.0GHz',
      GPU: 'Intel HD 520',
      RAM: '5.8 / 7.6 GiB',
      Packages: '1406 + 53 flatpak',
      Terminal: 'ghostty',
      Theme: 'Fluent-round-orange-Dark',
    },
  },
  {
    id: 'server',
    name: 'propstg@propstgserver',
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
      Host: 'X79SE PLUS',
      OS: 'Ubuntu Server 24.04.2 LTS',
      Uptime: '7d 6h',
      Shell: 'bash 5.2.21',
      Resolution: '800x600',
      Terminal: '/dev/pts/0',
      CPU: 'Xeon E5-2660 v2 (20) @ 3GHz',
      GPU: 'GTX 750',
      RAM: '19.2 / 32 GiB',
      Packages: '1512 + 4 snap',
    },
  },
];
