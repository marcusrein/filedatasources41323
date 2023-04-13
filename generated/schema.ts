// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Token entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Token must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Token", id.toString(), this);
    }
  }

  static load(id: string): Token | null {
    return changetype<Token | null>(store.get("Token", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get tokenId(): BigInt {
    let value = this.get("tokenId");
    return value!.toBigInt();
  }

  set tokenId(value: BigInt) {
    this.set("tokenId", Value.fromBigInt(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get ipfsURI(): string {
    let value = this.get("ipfsURI");
    return value!.toString();
  }

  set ipfsURI(value: string) {
    this.set("ipfsURI", Value.fromString(value));
  }

  get blockTimestamp(): BigInt {
    let value = this.get("blockTimestamp");
    return value!.toBigInt();
  }

  set blockTimestamp(value: BigInt) {
    this.set("blockTimestamp", Value.fromBigInt(value));
  }
}

export class TokenMetadata extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save TokenMetadata entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type TokenMetadata must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("TokenMetadata", id.toString(), this);
    }
  }

  static load(id: string): TokenMetadata | null {
    return changetype<TokenMetadata | null>(store.get("TokenMetadata", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get image(): string {
    let value = this.get("image");
    return value!.toString();
  }

  set image(value: string) {
    this.set("image", Value.fromString(value));
  }

  get trait_type0(): string {
    let value = this.get("trait_type0");
    return value!.toString();
  }

  set trait_type0(value: string) {
    this.set("trait_type0", Value.fromString(value));
  }

  get value0(): string {
    let value = this.get("value0");
    return value!.toString();
  }

  set value0(value: string) {
    this.set("value0", Value.fromString(value));
  }

  get trait_type1(): string {
    let value = this.get("trait_type1");
    return value!.toString();
  }

  set trait_type1(value: string) {
    this.set("trait_type1", Value.fromString(value));
  }

  get value1(): string {
    let value = this.get("value1");
    return value!.toString();
  }

  set value1(value: string) {
    this.set("value1", Value.fromString(value));
  }

  get trait_type2(): string {
    let value = this.get("trait_type2");
    return value!.toString();
  }

  set trait_type2(value: string) {
    this.set("trait_type2", Value.fromString(value));
  }

  get value2(): string {
    let value = this.get("value2");
    return value!.toString();
  }

  set value2(value: string) {
    this.set("value2", Value.fromString(value));
  }

  get trait_type3(): string {
    let value = this.get("trait_type3");
    return value!.toString();
  }

  set trait_type3(value: string) {
    this.set("trait_type3", Value.fromString(value));
  }

  get value3(): string {
    let value = this.get("value3");
    return value!.toString();
  }

  set value3(value: string) {
    this.set("value3", Value.fromString(value));
  }

  get trait_type4(): string {
    let value = this.get("trait_type4");
    return value!.toString();
  }

  set trait_type4(value: string) {
    this.set("trait_type4", Value.fromString(value));
  }

  get value4(): string {
    let value = this.get("value4");
    return value!.toString();
  }

  set value4(value: string) {
    this.set("value4", Value.fromString(value));
  }
}
