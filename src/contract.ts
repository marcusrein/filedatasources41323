import { Transfer as TransferEvent } from "../generated/Contract/Contract";
import { Token, TokenMetadata } from "../generated/schema";

import { TokenMetadata as TokenMetadataTemplate } from "../generated/templates";

import { dataSource, log, json, Bytes } from "@graphprotocol/graph-ts";

const ipfshash = "QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq";

log.info("ipfshash: {}", [ipfshash ? "true" : "false"]);

export function handleTransfer(event: TransferEvent): void {
	let token = Token.load(event.params.tokenId.toString());
	log.info("token: {}", [token ? "true" : "false"]);

	if (!token) {
		log.info("negative token BEGIN: {}", [token ? "true" : "false"]);
		token = new Token(event.params.tokenId.toString());
		token.tokenId = event.params.tokenId;

		token.tokenURI = "/" + event.params.tokenId.toString() + ".json";
		const tokenIpfsHash = ipfshash + token.tokenURI;

		token.ipfsURI = tokenIpfsHash;

		TokenMetadataTemplate.create(tokenIpfsHash);
		log.info("tokenIpfsHash END OF token BEGIN: {}", [
			tokenIpfsHash ? tokenIpfsHash.toString() : "false",
		]);
	}

	token.blockTimestamp = event.block.timestamp;
	token.save();
}

export function handleMetadata(content: Bytes): void {
	let tokenMetadata = new TokenMetadata(dataSource.stringParam());
	const value = json.fromBytes(content).toObject();
	if (value) {
		log.info("value: {}", [value ? "true" : "false"]);
		const image = value.get("image");
		const attributes = value.get("attributes");
		if (image && attributes) {
			log.info("image: {}", [image ? "true" : "false"]);
			const attributeData = attributes.toObject();
			const attribute0 = attributeData.get("0");
			const attribute1 = attributeData.get("1");
			const attribute2 = attributeData.get("2");
			const attribute3 = attributeData.get("3");
			const attribute4 = attributeData.get("4");
			if (
				attribute0 &&
				attribute1 &&
				attribute2 &&
				attribute3 &&
				attribute4
			) {
				log.info("attribute0: {}", [attribute0 ? "true" : "false"]);
				const attribute0Object = attribute0.toObject();
				const attribute1Object = attribute1.toObject();
				const attribute2Object = attribute2.toObject();
				const attribute3Object = attribute3.toObject();
				const attribute4Object = attribute4.toObject();
				const trait_type0 = attribute0Object.get("trait_type");
				const trait_type1 = attribute1Object.get("trait_type");
				const trait_type2 = attribute2Object.get("trait_type");
				const trait_type3 = attribute3Object.get("trait_type");
				const trait_type4 = attribute4Object.get("trait_type");
				const value0 = attribute0Object.get("value");
				const value1 = attribute1Object.get("value");
				const value2 = attribute2Object.get("value");
				const value3 = attribute3Object.get("value");
				const value4 = attribute4Object.get("value");
				if (
					trait_type0 &&
					trait_type1 &&
					trait_type2 &&
					trait_type3 &&
					trait_type4 &&
					value0 &&
					value1 &&
					value2 &&
					value3 &&
					value4
				) {
					log.info("trait_type0: {}", [
						trait_type0 ? "true" : "false",
					]);
					tokenMetadata.trait_type0 = trait_type0.toString();
					tokenMetadata.trait_type1 = trait_type1.toString();
					tokenMetadata.trait_type2 = trait_type2.toString();
					tokenMetadata.trait_type3 = trait_type3.toString();
					tokenMetadata.trait_type4 = trait_type4.toString();
					tokenMetadata.value0 = value0.toString();
					tokenMetadata.value1 = value1.toString();
					tokenMetadata.value2 = value2.toString();
					tokenMetadata.value3 = value3.toString();
					tokenMetadata.value4 = value4.toString();
				}
			}
		}
		tokenMetadata.save();
	}
}
