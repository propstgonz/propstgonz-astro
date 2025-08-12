<<<<<<< HEAD
export const computers = [
  {
    id: "main-pc",
    name: "Propstg@B650",
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
      Host: "ASUS System Product Name",
      OS: "Windows 11 Pro (64-bit)",
      Kernel: "10.0.26100.0",
      Motherboard: "TUF GAMING B650M-PLUS",
      Uptime: "2d 13h",
      Shell: "PowerShell 7.5.1",
      CPU: "Ryzen 5 7600X",
      GPU: "RX 7700 XT",
      RAM: "20.49 / 31.66 GiB (64%)",
      Disk: "149 / 930 GiB (16%)",
    },
  },
  {
    id: "laptop",
    name: "propstg@E5470",
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
      Host: "Latitude E5470",
      OS: "Arch Linux x86_64",
      Uptime: "7d 3h",
      Shell: "zsh 5.9",
      "DE/WM": "GNOME + Mutter",
      Resolution: "1366x768",
      CPU: "i5-6300U @ 3.0GHz",
      GPU: "Intel HD 520",
      RAM: "5.8 / 7.6 GiB",
      Packages: "1406 + 53 flatpak",
      Terminal: "ghostty",
      Theme: "Fluent-round-orange-Dark",
    },
  },
  {
    id: "server",
    name: "propstg@propstgserver",
    ascii: `
            .-/+oossssoo+/-.               propstg@propstgserver
        \`:+ssssssssssssssssss+:\`           ---------------------
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu Server 24.04.2 LTS x86_64
    .ossssssssssssssssssdMMMNysssso.       Host: X79SE PLUS
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 6.8.0-60-generic
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 7 days, 6 hours
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 1512 (dpkg), 4 (snap)
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: bash 5.2.21
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 800x600
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Terminal: /dev/pts/0
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   CPU: Intel Xeon E5-2660 v2 (20) @ 3.000GHz
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   GPU: NVIDIA GeForce GTX 750
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Memory: 1769MiB / 32005MiB
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/
  +sssssssssdmydMMMMMMMMddddyssssssss+
   /ssssssssssshdmNNNNmyNMMMMhssssss/
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.       
    `,
    specs: {
      Host: "X79SE PLUS",
      OS: "Ubuntu Server 24.04.2 LTS",
      Uptime: "7d 6h",
      Shell: "bash 5.2.21",
      Resolution: "800x600",
      Terminal: "/dev/pts/0",
      CPU: "Xeon E5-2660 v2 (20) @ 3GHz",
      GPU: "GTX 750",
      RAM: "1.7 / 32 GiB",
      Packages: "1512 + 4 snap",
    },
  },
];
=======
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
            .-/+oossssoo+/-.               propstg@propstgserver
        \`:+ssssssssssssssssss+:\`           ---------------------
      -+ssssssssssssssssssyyssss+-         OS: Ubuntu Server 24.04.2 LTS x86_64
    .ossssssssssssssssssdMMMNysssso.       Host: X79SE PLUS
   /ssssssssssshdmmNNmmyNMMMMhssssss/      Kernel: 6.8.0-60-generic
  +ssssssssshmydMMMMMMMNddddyssssssss+     Uptime: 7 days, 6 hours
 /sssssssshNMMMyhhyyyyhmNMMMNhssssssss/    Packages: 1512 (dpkg), 4 (snap)
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Shell: bash 5.2.21
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   Resolution: 800x600
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   Terminal: /dev/pts/0
ossyNMMMNyMMhsssssssssssssshmmmhssssssso   CPU: Intel Xeon E5-2660 v2 (20) @ 3.000GHz
+sssshhhyNMMNyssssssssssssyNMMMysssssss+   GPU: NVIDIA GeForce GTX 750
.ssssssssdMMMNhsssssssssshNMMMdssssssss.   Memory: 1769MiB / 32005MiB
 /sssssssshNMMMyhhyyyyhdNMMMNhssssssss/
  +sssssssssdmydMMMMMMMMddddyssssssss+
   /ssssssssssshdmNNNNmyNMMMMhssssss/
    .ossssssssssssssssssdMMMNysssso.
      -+sssssssssssssssssyyyssss+-
        \`:+ssssssssssssssssss+:\`
            .-/+oossssoo+/-.       
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
      RAM: '1.7 / 32 GiB',
      Packages: '1512 + 4 snap',
    },
  },
];
>>>>>>> main
