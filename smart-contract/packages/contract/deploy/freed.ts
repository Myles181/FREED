import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function(hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  const deployment = await deploy("Freed", {
    from: deployer,
    log: true,
  });

  await hre.ethernal.push({
    name: 'Freed',
    address: deployment.address
  })
};

export default func;
func.id = "deploy_freed";
func.tags = ["Freed"];
