

SPDX License Identifier

## Trust in smart contracts can be better established if their source code is available.##

// SPDX-License-Identifier: MIT


From Solidity ^0.6.8 SPDX license is introduced. So you need to use SPDX-License-Identifier in the code.

Have a look at this: https://forum.openzeppelin.com/t/solidity-0-6-8-introduces-spdx-license-identifiers/2859

For example in your code you need to use license identifier like

// SPDX-License-Identifier: MIT
pragma solidity ^0.7.5;
contract TestContract {
// Some logic
}
You need to use license according to your project. Some other licenses are:

// SPDX-License-Identifier: GPL-3.0-or-later
You can find list of licenses here: https://spdx.org/licenses/





