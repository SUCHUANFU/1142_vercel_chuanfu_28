
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Post
 * 
 */
export type Post = $Result.DefaultSelection<Prisma.$PostPayload>
/**
 * Model Grocery
 * 
 */
export type Grocery = $Result.DefaultSelection<Prisma.$GroceryPayload>
/**
 * Model Blog_28
 * 
 */
export type Blog_28 = $Result.DefaultSelection<Prisma.$Blog_28Payload>
/**
 * Model Category_28
 * 
 */
export type Category_28 = $Result.DefaultSelection<Prisma.$Category_28Payload>
/**
 * Model Shop_28
 * 
 */
export type Shop_28 = $Result.DefaultSelection<Prisma.$Shop_28Payload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.post`: Exposes CRUD operations for the **Post** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Posts
    * const posts = await prisma.post.findMany()
    * ```
    */
  get post(): Prisma.PostDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.grocery`: Exposes CRUD operations for the **Grocery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groceries
    * const groceries = await prisma.grocery.findMany()
    * ```
    */
  get grocery(): Prisma.GroceryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.blog_28`: Exposes CRUD operations for the **Blog_28** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Blog_28s
    * const blog_28s = await prisma.blog_28.findMany()
    * ```
    */
  get blog_28(): Prisma.Blog_28Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category_28`: Exposes CRUD operations for the **Category_28** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Category_28s
    * const category_28s = await prisma.category_28.findMany()
    * ```
    */
  get category_28(): Prisma.Category_28Delegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shop_28`: Exposes CRUD operations for the **Shop_28** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shop_28s
    * const shop_28s = await prisma.shop_28.findMany()
    * ```
    */
  get shop_28(): Prisma.Shop_28Delegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Post: 'Post',
    Grocery: 'Grocery',
    Blog_28: 'Blog_28',
    Category_28: 'Category_28',
    Shop_28: 'Shop_28'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "post" | "grocery" | "blog_28" | "category_28" | "shop_28"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Post: {
        payload: Prisma.$PostPayload<ExtArgs>
        fields: Prisma.PostFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findFirst: {
            args: Prisma.PostFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          findMany: {
            args: Prisma.PostFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          create: {
            args: Prisma.PostCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          createMany: {
            args: Prisma.PostCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          delete: {
            args: Prisma.PostDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          update: {
            args: Prisma.PostUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          deleteMany: {
            args: Prisma.PostDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>[]
          }
          upsert: {
            args: Prisma.PostUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostPayload>
          }
          aggregate: {
            args: Prisma.PostAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePost>
          }
          groupBy: {
            args: Prisma.PostGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostCountArgs<ExtArgs>
            result: $Utils.Optional<PostCountAggregateOutputType> | number
          }
        }
      }
      Grocery: {
        payload: Prisma.$GroceryPayload<ExtArgs>
        fields: Prisma.GroceryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroceryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroceryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          findFirst: {
            args: Prisma.GroceryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroceryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          findMany: {
            args: Prisma.GroceryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          create: {
            args: Prisma.GroceryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          createMany: {
            args: Prisma.GroceryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GroceryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          delete: {
            args: Prisma.GroceryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          update: {
            args: Prisma.GroceryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          deleteMany: {
            args: Prisma.GroceryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GroceryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GroceryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>[]
          }
          upsert: {
            args: Prisma.GroceryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GroceryPayload>
          }
          aggregate: {
            args: Prisma.GroceryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGrocery>
          }
          groupBy: {
            args: Prisma.GroceryGroupByArgs<ExtArgs>
            result: $Utils.Optional<GroceryGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroceryCountArgs<ExtArgs>
            result: $Utils.Optional<GroceryCountAggregateOutputType> | number
          }
        }
      }
      Blog_28: {
        payload: Prisma.$Blog_28Payload<ExtArgs>
        fields: Prisma.Blog_28FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Blog_28FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Blog_28FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>
          }
          findFirst: {
            args: Prisma.Blog_28FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Blog_28FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>
          }
          findMany: {
            args: Prisma.Blog_28FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>[]
          }
          create: {
            args: Prisma.Blog_28CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>
          }
          createMany: {
            args: Prisma.Blog_28CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Blog_28CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>[]
          }
          delete: {
            args: Prisma.Blog_28DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>
          }
          update: {
            args: Prisma.Blog_28UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>
          }
          deleteMany: {
            args: Prisma.Blog_28DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Blog_28UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Blog_28UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>[]
          }
          upsert: {
            args: Prisma.Blog_28UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Blog_28Payload>
          }
          aggregate: {
            args: Prisma.Blog_28AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBlog_28>
          }
          groupBy: {
            args: Prisma.Blog_28GroupByArgs<ExtArgs>
            result: $Utils.Optional<Blog_28GroupByOutputType>[]
          }
          count: {
            args: Prisma.Blog_28CountArgs<ExtArgs>
            result: $Utils.Optional<Blog_28CountAggregateOutputType> | number
          }
        }
      }
      Category_28: {
        payload: Prisma.$Category_28Payload<ExtArgs>
        fields: Prisma.Category_28FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Category_28FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Category_28FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>
          }
          findFirst: {
            args: Prisma.Category_28FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Category_28FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>
          }
          findMany: {
            args: Prisma.Category_28FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>[]
          }
          create: {
            args: Prisma.Category_28CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>
          }
          createMany: {
            args: Prisma.Category_28CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Category_28CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>[]
          }
          delete: {
            args: Prisma.Category_28DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>
          }
          update: {
            args: Prisma.Category_28UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>
          }
          deleteMany: {
            args: Prisma.Category_28DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Category_28UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Category_28UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>[]
          }
          upsert: {
            args: Prisma.Category_28UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Category_28Payload>
          }
          aggregate: {
            args: Prisma.Category_28AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory_28>
          }
          groupBy: {
            args: Prisma.Category_28GroupByArgs<ExtArgs>
            result: $Utils.Optional<Category_28GroupByOutputType>[]
          }
          count: {
            args: Prisma.Category_28CountArgs<ExtArgs>
            result: $Utils.Optional<Category_28CountAggregateOutputType> | number
          }
        }
      }
      Shop_28: {
        payload: Prisma.$Shop_28Payload<ExtArgs>
        fields: Prisma.Shop_28FieldRefs
        operations: {
          findUnique: {
            args: Prisma.Shop_28FindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Shop_28FindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>
          }
          findFirst: {
            args: Prisma.Shop_28FindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Shop_28FindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>
          }
          findMany: {
            args: Prisma.Shop_28FindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>[]
          }
          create: {
            args: Prisma.Shop_28CreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>
          }
          createMany: {
            args: Prisma.Shop_28CreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Shop_28CreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>[]
          }
          delete: {
            args: Prisma.Shop_28DeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>
          }
          update: {
            args: Prisma.Shop_28UpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>
          }
          deleteMany: {
            args: Prisma.Shop_28DeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Shop_28UpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Shop_28UpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>[]
          }
          upsert: {
            args: Prisma.Shop_28UpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Shop_28Payload>
          }
          aggregate: {
            args: Prisma.Shop_28AggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop_28>
          }
          groupBy: {
            args: Prisma.Shop_28GroupByArgs<ExtArgs>
            result: $Utils.Optional<Shop_28GroupByOutputType>[]
          }
          count: {
            args: Prisma.Shop_28CountArgs<ExtArgs>
            result: $Utils.Optional<Shop_28CountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    post?: PostOmit
    grocery?: GroceryOmit
    blog_28?: Blog_28Omit
    category_28?: Category_28Omit
    shop_28?: Shop_28Omit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    posts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | UserCountOutputTypeCountPostsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPostsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    name: string | null
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "name", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    posts?: boolean | User$postsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      posts: Prisma.$PostPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      name: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    posts<T extends User$postsArgs<ExtArgs> = {}>(args?: Subset<T, User$postsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.posts
   */
  export type User$postsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    where?: PostWhereInput
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    cursor?: PostWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Post
   */

  export type AggregatePost = {
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  export type PostAvgAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostSumAggregateOutputType = {
    id: number | null
    authorId: number | null
  }

  export type PostMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    published: boolean | null
    authorId: number | null
  }

  export type PostCountAggregateOutputType = {
    id: number
    title: number
    content: number
    published: number
    authorId: number
    _all: number
  }


  export type PostAvgAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostSumAggregateInputType = {
    id?: true
    authorId?: true
  }

  export type PostMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
  }

  export type PostCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    published?: true
    authorId?: true
    _all?: true
  }

  export type PostAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Post to aggregate.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Posts
    **/
    _count?: true | PostCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostMaxAggregateInputType
  }

  export type GetPostAggregateType<T extends PostAggregateArgs> = {
        [P in keyof T & keyof AggregatePost]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePost[P]>
      : GetScalarType<T[P], AggregatePost[P]>
  }




  export type PostGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostWhereInput
    orderBy?: PostOrderByWithAggregationInput | PostOrderByWithAggregationInput[]
    by: PostScalarFieldEnum[] | PostScalarFieldEnum
    having?: PostScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostCountAggregateInputType | true
    _avg?: PostAvgAggregateInputType
    _sum?: PostSumAggregateInputType
    _min?: PostMinAggregateInputType
    _max?: PostMaxAggregateInputType
  }

  export type PostGroupByOutputType = {
    id: number
    title: string
    content: string | null
    published: boolean
    authorId: number
    _count: PostCountAggregateOutputType | null
    _avg: PostAvgAggregateOutputType | null
    _sum: PostSumAggregateOutputType | null
    _min: PostMinAggregateOutputType | null
    _max: PostMaxAggregateOutputType | null
  }

  type GetPostGroupByPayload<T extends PostGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostGroupByOutputType[P]>
            : GetScalarType<T[P], PostGroupByOutputType[P]>
        }
      >
    >


  export type PostSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
    author?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["post"]>

  export type PostSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    published?: boolean
    authorId?: boolean
  }

  export type PostOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "content" | "published" | "authorId", ExtArgs["result"]["post"]>
  export type PostInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PostIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    author?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PostPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Post"
    objects: {
      author: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string | null
      published: boolean
      authorId: number
    }, ExtArgs["result"]["post"]>
    composites: {}
  }

  type PostGetPayload<S extends boolean | null | undefined | PostDefaultArgs> = $Result.GetResult<Prisma.$PostPayload, S>

  type PostCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostCountAggregateInputType | true
    }

  export interface PostDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Post'], meta: { name: 'Post' } }
    /**
     * Find zero or one Post that matches the filter.
     * @param {PostFindUniqueArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostFindUniqueArgs>(args: SelectSubset<T, PostFindUniqueArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Post that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostFindUniqueOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostFindUniqueOrThrowArgs>(args: SelectSubset<T, PostFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostFindFirstArgs>(args?: SelectSubset<T, PostFindFirstArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Post that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindFirstOrThrowArgs} args - Arguments to find a Post
     * @example
     * // Get one Post
     * const post = await prisma.post.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostFindFirstOrThrowArgs>(args?: SelectSubset<T, PostFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Posts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Posts
     * const posts = await prisma.post.findMany()
     * 
     * // Get first 10 Posts
     * const posts = await prisma.post.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postWithIdOnly = await prisma.post.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostFindManyArgs>(args?: SelectSubset<T, PostFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Post.
     * @param {PostCreateArgs} args - Arguments to create a Post.
     * @example
     * // Create one Post
     * const Post = await prisma.post.create({
     *   data: {
     *     // ... data to create a Post
     *   }
     * })
     * 
     */
    create<T extends PostCreateArgs>(args: SelectSubset<T, PostCreateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Posts.
     * @param {PostCreateManyArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostCreateManyArgs>(args?: SelectSubset<T, PostCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Posts and returns the data saved in the database.
     * @param {PostCreateManyAndReturnArgs} args - Arguments to create many Posts.
     * @example
     * // Create many Posts
     * const post = await prisma.post.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostCreateManyAndReturnArgs>(args?: SelectSubset<T, PostCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Post.
     * @param {PostDeleteArgs} args - Arguments to delete one Post.
     * @example
     * // Delete one Post
     * const Post = await prisma.post.delete({
     *   where: {
     *     // ... filter to delete one Post
     *   }
     * })
     * 
     */
    delete<T extends PostDeleteArgs>(args: SelectSubset<T, PostDeleteArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Post.
     * @param {PostUpdateArgs} args - Arguments to update one Post.
     * @example
     * // Update one Post
     * const post = await prisma.post.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostUpdateArgs>(args: SelectSubset<T, PostUpdateArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Posts.
     * @param {PostDeleteManyArgs} args - Arguments to filter Posts to delete.
     * @example
     * // Delete a few Posts
     * const { count } = await prisma.post.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostDeleteManyArgs>(args?: SelectSubset<T, PostDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostUpdateManyArgs>(args: SelectSubset<T, PostUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Posts and returns the data updated in the database.
     * @param {PostUpdateManyAndReturnArgs} args - Arguments to update many Posts.
     * @example
     * // Update many Posts
     * const post = await prisma.post.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Posts and only return the `id`
     * const postWithIdOnly = await prisma.post.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostUpdateManyAndReturnArgs>(args: SelectSubset<T, PostUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Post.
     * @param {PostUpsertArgs} args - Arguments to update or create a Post.
     * @example
     * // Update or create a Post
     * const post = await prisma.post.upsert({
     *   create: {
     *     // ... data to create a Post
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Post we want to update
     *   }
     * })
     */
    upsert<T extends PostUpsertArgs>(args: SelectSubset<T, PostUpsertArgs<ExtArgs>>): Prisma__PostClient<$Result.GetResult<Prisma.$PostPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Posts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostCountArgs} args - Arguments to filter Posts to count.
     * @example
     * // Count the number of Posts
     * const count = await prisma.post.count({
     *   where: {
     *     // ... the filter for the Posts we want to count
     *   }
     * })
    **/
    count<T extends PostCountArgs>(
      args?: Subset<T, PostCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostAggregateArgs>(args: Subset<T, PostAggregateArgs>): Prisma.PrismaPromise<GetPostAggregateType<T>>

    /**
     * Group by Post.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostGroupByArgs['orderBy'] }
        : { orderBy?: PostGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Post model
   */
  readonly fields: PostFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Post.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    author<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Post model
   */
  interface PostFieldRefs {
    readonly id: FieldRef<"Post", 'Int'>
    readonly title: FieldRef<"Post", 'String'>
    readonly content: FieldRef<"Post", 'String'>
    readonly published: FieldRef<"Post", 'Boolean'>
    readonly authorId: FieldRef<"Post", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Post findUnique
   */
  export type PostFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findUniqueOrThrow
   */
  export type PostFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post findFirst
   */
  export type PostFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findFirstOrThrow
   */
  export type PostFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Post to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post findMany
   */
  export type PostFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter, which Posts to fetch.
     */
    where?: PostWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Posts to fetch.
     */
    orderBy?: PostOrderByWithRelationInput | PostOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Posts.
     */
    cursor?: PostWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Posts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Posts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Posts.
     */
    distinct?: PostScalarFieldEnum | PostScalarFieldEnum[]
  }

  /**
   * Post create
   */
  export type PostCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to create a Post.
     */
    data: XOR<PostCreateInput, PostUncheckedCreateInput>
  }

  /**
   * Post createMany
   */
  export type PostCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Post createManyAndReturn
   */
  export type PostCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to create many Posts.
     */
    data: PostCreateManyInput | PostCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post update
   */
  export type PostUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The data needed to update a Post.
     */
    data: XOR<PostUpdateInput, PostUncheckedUpdateInput>
    /**
     * Choose, which Post to update.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post updateMany
   */
  export type PostUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
  }

  /**
   * Post updateManyAndReturn
   */
  export type PostUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * The data used to update Posts.
     */
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyInput>
    /**
     * Filter which Posts to update
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Post upsert
   */
  export type PostUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * The filter to search for the Post to update in case it exists.
     */
    where: PostWhereUniqueInput
    /**
     * In case the Post found by the `where` argument doesn't exist, create a new Post with this data.
     */
    create: XOR<PostCreateInput, PostUncheckedCreateInput>
    /**
     * In case the Post was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostUpdateInput, PostUncheckedUpdateInput>
  }

  /**
   * Post delete
   */
  export type PostDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
    /**
     * Filter which Post to delete.
     */
    where: PostWhereUniqueInput
  }

  /**
   * Post deleteMany
   */
  export type PostDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Posts to delete
     */
    where?: PostWhereInput
    /**
     * Limit how many Posts to delete.
     */
    limit?: number
  }

  /**
   * Post without action
   */
  export type PostDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Post
     */
    select?: PostSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Post
     */
    omit?: PostOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostInclude<ExtArgs> | null
  }


  /**
   * Model Grocery
   */

  export type AggregateGrocery = {
    _count: GroceryCountAggregateOutputType | null
    _min: GroceryMinAggregateOutputType | null
    _max: GroceryMaxAggregateOutputType | null
  }

  export type GroceryMinAggregateOutputType = {
    id: string | null
    name: string | null
    completed: boolean | null
  }

  export type GroceryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    completed: boolean | null
  }

  export type GroceryCountAggregateOutputType = {
    id: number
    name: number
    completed: number
    _all: number
  }


  export type GroceryMinAggregateInputType = {
    id?: true
    name?: true
    completed?: true
  }

  export type GroceryMaxAggregateInputType = {
    id?: true
    name?: true
    completed?: true
  }

  export type GroceryCountAggregateInputType = {
    id?: true
    name?: true
    completed?: true
    _all?: true
  }

  export type GroceryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grocery to aggregate.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groceries
    **/
    _count?: true | GroceryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroceryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroceryMaxAggregateInputType
  }

  export type GetGroceryAggregateType<T extends GroceryAggregateArgs> = {
        [P in keyof T & keyof AggregateGrocery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrocery[P]>
      : GetScalarType<T[P], AggregateGrocery[P]>
  }




  export type GroceryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroceryWhereInput
    orderBy?: GroceryOrderByWithAggregationInput | GroceryOrderByWithAggregationInput[]
    by: GroceryScalarFieldEnum[] | GroceryScalarFieldEnum
    having?: GroceryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroceryCountAggregateInputType | true
    _min?: GroceryMinAggregateInputType
    _max?: GroceryMaxAggregateInputType
  }

  export type GroceryGroupByOutputType = {
    id: string
    name: string
    completed: boolean
    _count: GroceryCountAggregateOutputType | null
    _min: GroceryMinAggregateOutputType | null
    _max: GroceryMaxAggregateOutputType | null
  }

  type GetGroceryGroupByPayload<T extends GroceryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroceryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroceryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroceryGroupByOutputType[P]>
            : GetScalarType<T[P], GroceryGroupByOutputType[P]>
        }
      >
    >


  export type GrocerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    completed?: boolean
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    completed?: boolean
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    completed?: boolean
  }, ExtArgs["result"]["grocery"]>

  export type GrocerySelectScalar = {
    id?: boolean
    name?: boolean
    completed?: boolean
  }

  export type GroceryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "completed", ExtArgs["result"]["grocery"]>

  export type $GroceryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grocery"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      completed: boolean
    }, ExtArgs["result"]["grocery"]>
    composites: {}
  }

  type GroceryGetPayload<S extends boolean | null | undefined | GroceryDefaultArgs> = $Result.GetResult<Prisma.$GroceryPayload, S>

  type GroceryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GroceryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GroceryCountAggregateInputType | true
    }

  export interface GroceryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grocery'], meta: { name: 'Grocery' } }
    /**
     * Find zero or one Grocery that matches the filter.
     * @param {GroceryFindUniqueArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GroceryFindUniqueArgs>(args: SelectSubset<T, GroceryFindUniqueArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Grocery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GroceryFindUniqueOrThrowArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GroceryFindUniqueOrThrowArgs>(args: SelectSubset<T, GroceryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grocery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindFirstArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GroceryFindFirstArgs>(args?: SelectSubset<T, GroceryFindFirstArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Grocery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindFirstOrThrowArgs} args - Arguments to find a Grocery
     * @example
     * // Get one Grocery
     * const grocery = await prisma.grocery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GroceryFindFirstOrThrowArgs>(args?: SelectSubset<T, GroceryFindFirstOrThrowArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Groceries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groceries
     * const groceries = await prisma.grocery.findMany()
     * 
     * // Get first 10 Groceries
     * const groceries = await prisma.grocery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groceryWithIdOnly = await prisma.grocery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GroceryFindManyArgs>(args?: SelectSubset<T, GroceryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Grocery.
     * @param {GroceryCreateArgs} args - Arguments to create a Grocery.
     * @example
     * // Create one Grocery
     * const Grocery = await prisma.grocery.create({
     *   data: {
     *     // ... data to create a Grocery
     *   }
     * })
     * 
     */
    create<T extends GroceryCreateArgs>(args: SelectSubset<T, GroceryCreateArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Groceries.
     * @param {GroceryCreateManyArgs} args - Arguments to create many Groceries.
     * @example
     * // Create many Groceries
     * const grocery = await prisma.grocery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GroceryCreateManyArgs>(args?: SelectSubset<T, GroceryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Groceries and returns the data saved in the database.
     * @param {GroceryCreateManyAndReturnArgs} args - Arguments to create many Groceries.
     * @example
     * // Create many Groceries
     * const grocery = await prisma.grocery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Groceries and only return the `id`
     * const groceryWithIdOnly = await prisma.grocery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GroceryCreateManyAndReturnArgs>(args?: SelectSubset<T, GroceryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Grocery.
     * @param {GroceryDeleteArgs} args - Arguments to delete one Grocery.
     * @example
     * // Delete one Grocery
     * const Grocery = await prisma.grocery.delete({
     *   where: {
     *     // ... filter to delete one Grocery
     *   }
     * })
     * 
     */
    delete<T extends GroceryDeleteArgs>(args: SelectSubset<T, GroceryDeleteArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Grocery.
     * @param {GroceryUpdateArgs} args - Arguments to update one Grocery.
     * @example
     * // Update one Grocery
     * const grocery = await prisma.grocery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GroceryUpdateArgs>(args: SelectSubset<T, GroceryUpdateArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Groceries.
     * @param {GroceryDeleteManyArgs} args - Arguments to filter Groceries to delete.
     * @example
     * // Delete a few Groceries
     * const { count } = await prisma.grocery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GroceryDeleteManyArgs>(args?: SelectSubset<T, GroceryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groceries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groceries
     * const grocery = await prisma.grocery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GroceryUpdateManyArgs>(args: SelectSubset<T, GroceryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groceries and returns the data updated in the database.
     * @param {GroceryUpdateManyAndReturnArgs} args - Arguments to update many Groceries.
     * @example
     * // Update many Groceries
     * const grocery = await prisma.grocery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Groceries and only return the `id`
     * const groceryWithIdOnly = await prisma.grocery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GroceryUpdateManyAndReturnArgs>(args: SelectSubset<T, GroceryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Grocery.
     * @param {GroceryUpsertArgs} args - Arguments to update or create a Grocery.
     * @example
     * // Update or create a Grocery
     * const grocery = await prisma.grocery.upsert({
     *   create: {
     *     // ... data to create a Grocery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grocery we want to update
     *   }
     * })
     */
    upsert<T extends GroceryUpsertArgs>(args: SelectSubset<T, GroceryUpsertArgs<ExtArgs>>): Prisma__GroceryClient<$Result.GetResult<Prisma.$GroceryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Groceries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryCountArgs} args - Arguments to filter Groceries to count.
     * @example
     * // Count the number of Groceries
     * const count = await prisma.grocery.count({
     *   where: {
     *     // ... the filter for the Groceries we want to count
     *   }
     * })
    **/
    count<T extends GroceryCountArgs>(
      args?: Subset<T, GroceryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroceryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grocery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GroceryAggregateArgs>(args: Subset<T, GroceryAggregateArgs>): Prisma.PrismaPromise<GetGroceryAggregateType<T>>

    /**
     * Group by Grocery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroceryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GroceryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroceryGroupByArgs['orderBy'] }
        : { orderBy?: GroceryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GroceryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroceryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grocery model
   */
  readonly fields: GroceryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grocery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroceryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Grocery model
   */
  interface GroceryFieldRefs {
    readonly id: FieldRef<"Grocery", 'String'>
    readonly name: FieldRef<"Grocery", 'String'>
    readonly completed: FieldRef<"Grocery", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Grocery findUnique
   */
  export type GroceryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery findUniqueOrThrow
   */
  export type GroceryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery findFirst
   */
  export type GroceryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery findFirstOrThrow
   */
  export type GroceryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Grocery to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery findMany
   */
  export type GroceryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter, which Groceries to fetch.
     */
    where?: GroceryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groceries to fetch.
     */
    orderBy?: GroceryOrderByWithRelationInput | GroceryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groceries.
     */
    cursor?: GroceryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groceries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groceries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groceries.
     */
    distinct?: GroceryScalarFieldEnum | GroceryScalarFieldEnum[]
  }

  /**
   * Grocery create
   */
  export type GroceryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data needed to create a Grocery.
     */
    data: XOR<GroceryCreateInput, GroceryUncheckedCreateInput>
  }

  /**
   * Grocery createMany
   */
  export type GroceryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groceries.
     */
    data: GroceryCreateManyInput | GroceryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grocery createManyAndReturn
   */
  export type GroceryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data used to create many Groceries.
     */
    data: GroceryCreateManyInput | GroceryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Grocery update
   */
  export type GroceryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data needed to update a Grocery.
     */
    data: XOR<GroceryUpdateInput, GroceryUncheckedUpdateInput>
    /**
     * Choose, which Grocery to update.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery updateMany
   */
  export type GroceryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groceries.
     */
    data: XOR<GroceryUpdateManyMutationInput, GroceryUncheckedUpdateManyInput>
    /**
     * Filter which Groceries to update
     */
    where?: GroceryWhereInput
    /**
     * Limit how many Groceries to update.
     */
    limit?: number
  }

  /**
   * Grocery updateManyAndReturn
   */
  export type GroceryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The data used to update Groceries.
     */
    data: XOR<GroceryUpdateManyMutationInput, GroceryUncheckedUpdateManyInput>
    /**
     * Filter which Groceries to update
     */
    where?: GroceryWhereInput
    /**
     * Limit how many Groceries to update.
     */
    limit?: number
  }

  /**
   * Grocery upsert
   */
  export type GroceryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * The filter to search for the Grocery to update in case it exists.
     */
    where: GroceryWhereUniqueInput
    /**
     * In case the Grocery found by the `where` argument doesn't exist, create a new Grocery with this data.
     */
    create: XOR<GroceryCreateInput, GroceryUncheckedCreateInput>
    /**
     * In case the Grocery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroceryUpdateInput, GroceryUncheckedUpdateInput>
  }

  /**
   * Grocery delete
   */
  export type GroceryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
    /**
     * Filter which Grocery to delete.
     */
    where: GroceryWhereUniqueInput
  }

  /**
   * Grocery deleteMany
   */
  export type GroceryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groceries to delete
     */
    where?: GroceryWhereInput
    /**
     * Limit how many Groceries to delete.
     */
    limit?: number
  }

  /**
   * Grocery without action
   */
  export type GroceryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grocery
     */
    select?: GrocerySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Grocery
     */
    omit?: GroceryOmit<ExtArgs> | null
  }


  /**
   * Model Blog_28
   */

  export type AggregateBlog_28 = {
    _count: Blog_28CountAggregateOutputType | null
    _avg: Blog_28AvgAggregateOutputType | null
    _sum: Blog_28SumAggregateOutputType | null
    _min: Blog_28MinAggregateOutputType | null
    _max: Blog_28MaxAggregateOutputType | null
  }

  export type Blog_28AvgAggregateOutputType = {
    id: number | null
  }

  export type Blog_28SumAggregateOutputType = {
    id: number | null
  }

  export type Blog_28MinAggregateOutputType = {
    id: number | null
    title: string | null
    descrip: string | null
    category: string | null
    img: string | null
    remote_img: string | null
  }

  export type Blog_28MaxAggregateOutputType = {
    id: number | null
    title: string | null
    descrip: string | null
    category: string | null
    img: string | null
    remote_img: string | null
  }

  export type Blog_28CountAggregateOutputType = {
    id: number
    title: number
    descrip: number
    category: number
    img: number
    remote_img: number
    _all: number
  }


  export type Blog_28AvgAggregateInputType = {
    id?: true
  }

  export type Blog_28SumAggregateInputType = {
    id?: true
  }

  export type Blog_28MinAggregateInputType = {
    id?: true
    title?: true
    descrip?: true
    category?: true
    img?: true
    remote_img?: true
  }

  export type Blog_28MaxAggregateInputType = {
    id?: true
    title?: true
    descrip?: true
    category?: true
    img?: true
    remote_img?: true
  }

  export type Blog_28CountAggregateInputType = {
    id?: true
    title?: true
    descrip?: true
    category?: true
    img?: true
    remote_img?: true
    _all?: true
  }

  export type Blog_28AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog_28 to aggregate.
     */
    where?: Blog_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blog_28s to fetch.
     */
    orderBy?: Blog_28OrderByWithRelationInput | Blog_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Blog_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blog_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blog_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Blog_28s
    **/
    _count?: true | Blog_28CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Blog_28AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Blog_28SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Blog_28MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Blog_28MaxAggregateInputType
  }

  export type GetBlog_28AggregateType<T extends Blog_28AggregateArgs> = {
        [P in keyof T & keyof AggregateBlog_28]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBlog_28[P]>
      : GetScalarType<T[P], AggregateBlog_28[P]>
  }




  export type Blog_28GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Blog_28WhereInput
    orderBy?: Blog_28OrderByWithAggregationInput | Blog_28OrderByWithAggregationInput[]
    by: Blog_28ScalarFieldEnum[] | Blog_28ScalarFieldEnum
    having?: Blog_28ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Blog_28CountAggregateInputType | true
    _avg?: Blog_28AvgAggregateInputType
    _sum?: Blog_28SumAggregateInputType
    _min?: Blog_28MinAggregateInputType
    _max?: Blog_28MaxAggregateInputType
  }

  export type Blog_28GroupByOutputType = {
    id: number
    title: string | null
    descrip: string | null
    category: string | null
    img: string | null
    remote_img: string | null
    _count: Blog_28CountAggregateOutputType | null
    _avg: Blog_28AvgAggregateOutputType | null
    _sum: Blog_28SumAggregateOutputType | null
    _min: Blog_28MinAggregateOutputType | null
    _max: Blog_28MaxAggregateOutputType | null
  }

  type GetBlog_28GroupByPayload<T extends Blog_28GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Blog_28GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Blog_28GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Blog_28GroupByOutputType[P]>
            : GetScalarType<T[P], Blog_28GroupByOutputType[P]>
        }
      >
    >


  export type Blog_28Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
    remote_img?: boolean
  }, ExtArgs["result"]["blog_28"]>

  export type Blog_28SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
    remote_img?: boolean
  }, ExtArgs["result"]["blog_28"]>

  export type Blog_28SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
    remote_img?: boolean
  }, ExtArgs["result"]["blog_28"]>

  export type Blog_28SelectScalar = {
    id?: boolean
    title?: boolean
    descrip?: boolean
    category?: boolean
    img?: boolean
    remote_img?: boolean
  }

  export type Blog_28Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "descrip" | "category" | "img" | "remote_img", ExtArgs["result"]["blog_28"]>

  export type $Blog_28Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Blog_28"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      descrip: string | null
      category: string | null
      img: string | null
      remote_img: string | null
    }, ExtArgs["result"]["blog_28"]>
    composites: {}
  }

  type Blog_28GetPayload<S extends boolean | null | undefined | Blog_28DefaultArgs> = $Result.GetResult<Prisma.$Blog_28Payload, S>

  type Blog_28CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Blog_28FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Blog_28CountAggregateInputType | true
    }

  export interface Blog_28Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Blog_28'], meta: { name: 'Blog_28' } }
    /**
     * Find zero or one Blog_28 that matches the filter.
     * @param {Blog_28FindUniqueArgs} args - Arguments to find a Blog_28
     * @example
     * // Get one Blog_28
     * const blog_28 = await prisma.blog_28.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Blog_28FindUniqueArgs>(args: SelectSubset<T, Blog_28FindUniqueArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Blog_28 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Blog_28FindUniqueOrThrowArgs} args - Arguments to find a Blog_28
     * @example
     * // Get one Blog_28
     * const blog_28 = await prisma.blog_28.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Blog_28FindUniqueOrThrowArgs>(args: SelectSubset<T, Blog_28FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_28 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_28FindFirstArgs} args - Arguments to find a Blog_28
     * @example
     * // Get one Blog_28
     * const blog_28 = await prisma.blog_28.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Blog_28FindFirstArgs>(args?: SelectSubset<T, Blog_28FindFirstArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Blog_28 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_28FindFirstOrThrowArgs} args - Arguments to find a Blog_28
     * @example
     * // Get one Blog_28
     * const blog_28 = await prisma.blog_28.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Blog_28FindFirstOrThrowArgs>(args?: SelectSubset<T, Blog_28FindFirstOrThrowArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Blog_28s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_28FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Blog_28s
     * const blog_28s = await prisma.blog_28.findMany()
     * 
     * // Get first 10 Blog_28s
     * const blog_28s = await prisma.blog_28.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const blog_28WithIdOnly = await prisma.blog_28.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Blog_28FindManyArgs>(args?: SelectSubset<T, Blog_28FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Blog_28.
     * @param {Blog_28CreateArgs} args - Arguments to create a Blog_28.
     * @example
     * // Create one Blog_28
     * const Blog_28 = await prisma.blog_28.create({
     *   data: {
     *     // ... data to create a Blog_28
     *   }
     * })
     * 
     */
    create<T extends Blog_28CreateArgs>(args: SelectSubset<T, Blog_28CreateArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Blog_28s.
     * @param {Blog_28CreateManyArgs} args - Arguments to create many Blog_28s.
     * @example
     * // Create many Blog_28s
     * const blog_28 = await prisma.blog_28.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Blog_28CreateManyArgs>(args?: SelectSubset<T, Blog_28CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Blog_28s and returns the data saved in the database.
     * @param {Blog_28CreateManyAndReturnArgs} args - Arguments to create many Blog_28s.
     * @example
     * // Create many Blog_28s
     * const blog_28 = await prisma.blog_28.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Blog_28s and only return the `id`
     * const blog_28WithIdOnly = await prisma.blog_28.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Blog_28CreateManyAndReturnArgs>(args?: SelectSubset<T, Blog_28CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Blog_28.
     * @param {Blog_28DeleteArgs} args - Arguments to delete one Blog_28.
     * @example
     * // Delete one Blog_28
     * const Blog_28 = await prisma.blog_28.delete({
     *   where: {
     *     // ... filter to delete one Blog_28
     *   }
     * })
     * 
     */
    delete<T extends Blog_28DeleteArgs>(args: SelectSubset<T, Blog_28DeleteArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Blog_28.
     * @param {Blog_28UpdateArgs} args - Arguments to update one Blog_28.
     * @example
     * // Update one Blog_28
     * const blog_28 = await prisma.blog_28.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Blog_28UpdateArgs>(args: SelectSubset<T, Blog_28UpdateArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Blog_28s.
     * @param {Blog_28DeleteManyArgs} args - Arguments to filter Blog_28s to delete.
     * @example
     * // Delete a few Blog_28s
     * const { count } = await prisma.blog_28.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Blog_28DeleteManyArgs>(args?: SelectSubset<T, Blog_28DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_28s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_28UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Blog_28s
     * const blog_28 = await prisma.blog_28.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Blog_28UpdateManyArgs>(args: SelectSubset<T, Blog_28UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Blog_28s and returns the data updated in the database.
     * @param {Blog_28UpdateManyAndReturnArgs} args - Arguments to update many Blog_28s.
     * @example
     * // Update many Blog_28s
     * const blog_28 = await prisma.blog_28.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Blog_28s and only return the `id`
     * const blog_28WithIdOnly = await prisma.blog_28.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Blog_28UpdateManyAndReturnArgs>(args: SelectSubset<T, Blog_28UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Blog_28.
     * @param {Blog_28UpsertArgs} args - Arguments to update or create a Blog_28.
     * @example
     * // Update or create a Blog_28
     * const blog_28 = await prisma.blog_28.upsert({
     *   create: {
     *     // ... data to create a Blog_28
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Blog_28 we want to update
     *   }
     * })
     */
    upsert<T extends Blog_28UpsertArgs>(args: SelectSubset<T, Blog_28UpsertArgs<ExtArgs>>): Prisma__Blog_28Client<$Result.GetResult<Prisma.$Blog_28Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Blog_28s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_28CountArgs} args - Arguments to filter Blog_28s to count.
     * @example
     * // Count the number of Blog_28s
     * const count = await prisma.blog_28.count({
     *   where: {
     *     // ... the filter for the Blog_28s we want to count
     *   }
     * })
    **/
    count<T extends Blog_28CountArgs>(
      args?: Subset<T, Blog_28CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Blog_28CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Blog_28.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_28AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Blog_28AggregateArgs>(args: Subset<T, Blog_28AggregateArgs>): Prisma.PrismaPromise<GetBlog_28AggregateType<T>>

    /**
     * Group by Blog_28.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Blog_28GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Blog_28GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Blog_28GroupByArgs['orderBy'] }
        : { orderBy?: Blog_28GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Blog_28GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBlog_28GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Blog_28 model
   */
  readonly fields: Blog_28FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Blog_28.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Blog_28Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Blog_28 model
   */
  interface Blog_28FieldRefs {
    readonly id: FieldRef<"Blog_28", 'Int'>
    readonly title: FieldRef<"Blog_28", 'String'>
    readonly descrip: FieldRef<"Blog_28", 'String'>
    readonly category: FieldRef<"Blog_28", 'String'>
    readonly img: FieldRef<"Blog_28", 'String'>
    readonly remote_img: FieldRef<"Blog_28", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Blog_28 findUnique
   */
  export type Blog_28FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * Filter, which Blog_28 to fetch.
     */
    where: Blog_28WhereUniqueInput
  }

  /**
   * Blog_28 findUniqueOrThrow
   */
  export type Blog_28FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * Filter, which Blog_28 to fetch.
     */
    where: Blog_28WhereUniqueInput
  }

  /**
   * Blog_28 findFirst
   */
  export type Blog_28FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * Filter, which Blog_28 to fetch.
     */
    where?: Blog_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blog_28s to fetch.
     */
    orderBy?: Blog_28OrderByWithRelationInput | Blog_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blog_28s.
     */
    cursor?: Blog_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blog_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blog_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blog_28s.
     */
    distinct?: Blog_28ScalarFieldEnum | Blog_28ScalarFieldEnum[]
  }

  /**
   * Blog_28 findFirstOrThrow
   */
  export type Blog_28FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * Filter, which Blog_28 to fetch.
     */
    where?: Blog_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blog_28s to fetch.
     */
    orderBy?: Blog_28OrderByWithRelationInput | Blog_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Blog_28s.
     */
    cursor?: Blog_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blog_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blog_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blog_28s.
     */
    distinct?: Blog_28ScalarFieldEnum | Blog_28ScalarFieldEnum[]
  }

  /**
   * Blog_28 findMany
   */
  export type Blog_28FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * Filter, which Blog_28s to fetch.
     */
    where?: Blog_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Blog_28s to fetch.
     */
    orderBy?: Blog_28OrderByWithRelationInput | Blog_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Blog_28s.
     */
    cursor?: Blog_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Blog_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Blog_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Blog_28s.
     */
    distinct?: Blog_28ScalarFieldEnum | Blog_28ScalarFieldEnum[]
  }

  /**
   * Blog_28 create
   */
  export type Blog_28CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * The data needed to create a Blog_28.
     */
    data: XOR<Blog_28CreateInput, Blog_28UncheckedCreateInput>
  }

  /**
   * Blog_28 createMany
   */
  export type Blog_28CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Blog_28s.
     */
    data: Blog_28CreateManyInput | Blog_28CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog_28 createManyAndReturn
   */
  export type Blog_28CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * The data used to create many Blog_28s.
     */
    data: Blog_28CreateManyInput | Blog_28CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Blog_28 update
   */
  export type Blog_28UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * The data needed to update a Blog_28.
     */
    data: XOR<Blog_28UpdateInput, Blog_28UncheckedUpdateInput>
    /**
     * Choose, which Blog_28 to update.
     */
    where: Blog_28WhereUniqueInput
  }

  /**
   * Blog_28 updateMany
   */
  export type Blog_28UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Blog_28s.
     */
    data: XOR<Blog_28UpdateManyMutationInput, Blog_28UncheckedUpdateManyInput>
    /**
     * Filter which Blog_28s to update
     */
    where?: Blog_28WhereInput
    /**
     * Limit how many Blog_28s to update.
     */
    limit?: number
  }

  /**
   * Blog_28 updateManyAndReturn
   */
  export type Blog_28UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * The data used to update Blog_28s.
     */
    data: XOR<Blog_28UpdateManyMutationInput, Blog_28UncheckedUpdateManyInput>
    /**
     * Filter which Blog_28s to update
     */
    where?: Blog_28WhereInput
    /**
     * Limit how many Blog_28s to update.
     */
    limit?: number
  }

  /**
   * Blog_28 upsert
   */
  export type Blog_28UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * The filter to search for the Blog_28 to update in case it exists.
     */
    where: Blog_28WhereUniqueInput
    /**
     * In case the Blog_28 found by the `where` argument doesn't exist, create a new Blog_28 with this data.
     */
    create: XOR<Blog_28CreateInput, Blog_28UncheckedCreateInput>
    /**
     * In case the Blog_28 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Blog_28UpdateInput, Blog_28UncheckedUpdateInput>
  }

  /**
   * Blog_28 delete
   */
  export type Blog_28DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
    /**
     * Filter which Blog_28 to delete.
     */
    where: Blog_28WhereUniqueInput
  }

  /**
   * Blog_28 deleteMany
   */
  export type Blog_28DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Blog_28s to delete
     */
    where?: Blog_28WhereInput
    /**
     * Limit how many Blog_28s to delete.
     */
    limit?: number
  }

  /**
   * Blog_28 without action
   */
  export type Blog_28DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Blog_28
     */
    select?: Blog_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Blog_28
     */
    omit?: Blog_28Omit<ExtArgs> | null
  }


  /**
   * Model Category_28
   */

  export type AggregateCategory_28 = {
    _count: Category_28CountAggregateOutputType | null
    _avg: Category_28AvgAggregateOutputType | null
    _sum: Category_28SumAggregateOutputType | null
    _min: Category_28MinAggregateOutputType | null
    _max: Category_28MaxAggregateOutputType | null
  }

  export type Category_28AvgAggregateOutputType = {
    cid: number | null
  }

  export type Category_28SumAggregateOutputType = {
    cid: number | null
  }

  export type Category_28MinAggregateOutputType = {
    cid: number | null
    cname: string | null
    size: string | null
    image_url: string | null
    remote_image_url: string | null
    link_url: string | null
  }

  export type Category_28MaxAggregateOutputType = {
    cid: number | null
    cname: string | null
    size: string | null
    image_url: string | null
    remote_image_url: string | null
    link_url: string | null
  }

  export type Category_28CountAggregateOutputType = {
    cid: number
    cname: number
    size: number
    image_url: number
    remote_image_url: number
    link_url: number
    _all: number
  }


  export type Category_28AvgAggregateInputType = {
    cid?: true
  }

  export type Category_28SumAggregateInputType = {
    cid?: true
  }

  export type Category_28MinAggregateInputType = {
    cid?: true
    cname?: true
    size?: true
    image_url?: true
    remote_image_url?: true
    link_url?: true
  }

  export type Category_28MaxAggregateInputType = {
    cid?: true
    cname?: true
    size?: true
    image_url?: true
    remote_image_url?: true
    link_url?: true
  }

  export type Category_28CountAggregateInputType = {
    cid?: true
    cname?: true
    size?: true
    image_url?: true
    remote_image_url?: true
    link_url?: true
    _all?: true
  }

  export type Category_28AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_28 to aggregate.
     */
    where?: Category_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_28s to fetch.
     */
    orderBy?: Category_28OrderByWithRelationInput | Category_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Category_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Category_28s
    **/
    _count?: true | Category_28CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Category_28AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Category_28SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Category_28MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Category_28MaxAggregateInputType
  }

  export type GetCategory_28AggregateType<T extends Category_28AggregateArgs> = {
        [P in keyof T & keyof AggregateCategory_28]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory_28[P]>
      : GetScalarType<T[P], AggregateCategory_28[P]>
  }




  export type Category_28GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Category_28WhereInput
    orderBy?: Category_28OrderByWithAggregationInput | Category_28OrderByWithAggregationInput[]
    by: Category_28ScalarFieldEnum[] | Category_28ScalarFieldEnum
    having?: Category_28ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Category_28CountAggregateInputType | true
    _avg?: Category_28AvgAggregateInputType
    _sum?: Category_28SumAggregateInputType
    _min?: Category_28MinAggregateInputType
    _max?: Category_28MaxAggregateInputType
  }

  export type Category_28GroupByOutputType = {
    cid: number
    cname: string | null
    size: string | null
    image_url: string | null
    remote_image_url: string | null
    link_url: string | null
    _count: Category_28CountAggregateOutputType | null
    _avg: Category_28AvgAggregateOutputType | null
    _sum: Category_28SumAggregateOutputType | null
    _min: Category_28MinAggregateOutputType | null
    _max: Category_28MaxAggregateOutputType | null
  }

  type GetCategory_28GroupByPayload<T extends Category_28GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Category_28GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Category_28GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Category_28GroupByOutputType[P]>
            : GetScalarType<T[P], Category_28GroupByOutputType[P]>
        }
      >
    >


  export type Category_28Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
    remote_image_url?: boolean
    link_url?: boolean
  }, ExtArgs["result"]["category_28"]>

  export type Category_28SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
    remote_image_url?: boolean
    link_url?: boolean
  }, ExtArgs["result"]["category_28"]>

  export type Category_28SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
    remote_image_url?: boolean
    link_url?: boolean
  }, ExtArgs["result"]["category_28"]>

  export type Category_28SelectScalar = {
    cid?: boolean
    cname?: boolean
    size?: boolean
    image_url?: boolean
    remote_image_url?: boolean
    link_url?: boolean
  }

  export type Category_28Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"cid" | "cname" | "size" | "image_url" | "remote_image_url" | "link_url", ExtArgs["result"]["category_28"]>

  export type $Category_28Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category_28"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      cid: number
      cname: string | null
      size: string | null
      image_url: string | null
      remote_image_url: string | null
      link_url: string | null
    }, ExtArgs["result"]["category_28"]>
    composites: {}
  }

  type Category_28GetPayload<S extends boolean | null | undefined | Category_28DefaultArgs> = $Result.GetResult<Prisma.$Category_28Payload, S>

  type Category_28CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Category_28FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Category_28CountAggregateInputType | true
    }

  export interface Category_28Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category_28'], meta: { name: 'Category_28' } }
    /**
     * Find zero or one Category_28 that matches the filter.
     * @param {Category_28FindUniqueArgs} args - Arguments to find a Category_28
     * @example
     * // Get one Category_28
     * const category_28 = await prisma.category_28.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Category_28FindUniqueArgs>(args: SelectSubset<T, Category_28FindUniqueArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category_28 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Category_28FindUniqueOrThrowArgs} args - Arguments to find a Category_28
     * @example
     * // Get one Category_28
     * const category_28 = await prisma.category_28.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Category_28FindUniqueOrThrowArgs>(args: SelectSubset<T, Category_28FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_28 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_28FindFirstArgs} args - Arguments to find a Category_28
     * @example
     * // Get one Category_28
     * const category_28 = await prisma.category_28.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Category_28FindFirstArgs>(args?: SelectSubset<T, Category_28FindFirstArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category_28 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_28FindFirstOrThrowArgs} args - Arguments to find a Category_28
     * @example
     * // Get one Category_28
     * const category_28 = await prisma.category_28.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Category_28FindFirstOrThrowArgs>(args?: SelectSubset<T, Category_28FindFirstOrThrowArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Category_28s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_28FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Category_28s
     * const category_28s = await prisma.category_28.findMany()
     * 
     * // Get first 10 Category_28s
     * const category_28s = await prisma.category_28.findMany({ take: 10 })
     * 
     * // Only select the `cid`
     * const category_28WithCidOnly = await prisma.category_28.findMany({ select: { cid: true } })
     * 
     */
    findMany<T extends Category_28FindManyArgs>(args?: SelectSubset<T, Category_28FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category_28.
     * @param {Category_28CreateArgs} args - Arguments to create a Category_28.
     * @example
     * // Create one Category_28
     * const Category_28 = await prisma.category_28.create({
     *   data: {
     *     // ... data to create a Category_28
     *   }
     * })
     * 
     */
    create<T extends Category_28CreateArgs>(args: SelectSubset<T, Category_28CreateArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Category_28s.
     * @param {Category_28CreateManyArgs} args - Arguments to create many Category_28s.
     * @example
     * // Create many Category_28s
     * const category_28 = await prisma.category_28.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Category_28CreateManyArgs>(args?: SelectSubset<T, Category_28CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Category_28s and returns the data saved in the database.
     * @param {Category_28CreateManyAndReturnArgs} args - Arguments to create many Category_28s.
     * @example
     * // Create many Category_28s
     * const category_28 = await prisma.category_28.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Category_28s and only return the `cid`
     * const category_28WithCidOnly = await prisma.category_28.createManyAndReturn({
     *   select: { cid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Category_28CreateManyAndReturnArgs>(args?: SelectSubset<T, Category_28CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category_28.
     * @param {Category_28DeleteArgs} args - Arguments to delete one Category_28.
     * @example
     * // Delete one Category_28
     * const Category_28 = await prisma.category_28.delete({
     *   where: {
     *     // ... filter to delete one Category_28
     *   }
     * })
     * 
     */
    delete<T extends Category_28DeleteArgs>(args: SelectSubset<T, Category_28DeleteArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category_28.
     * @param {Category_28UpdateArgs} args - Arguments to update one Category_28.
     * @example
     * // Update one Category_28
     * const category_28 = await prisma.category_28.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Category_28UpdateArgs>(args: SelectSubset<T, Category_28UpdateArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Category_28s.
     * @param {Category_28DeleteManyArgs} args - Arguments to filter Category_28s to delete.
     * @example
     * // Delete a few Category_28s
     * const { count } = await prisma.category_28.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Category_28DeleteManyArgs>(args?: SelectSubset<T, Category_28DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_28s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_28UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Category_28s
     * const category_28 = await prisma.category_28.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Category_28UpdateManyArgs>(args: SelectSubset<T, Category_28UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Category_28s and returns the data updated in the database.
     * @param {Category_28UpdateManyAndReturnArgs} args - Arguments to update many Category_28s.
     * @example
     * // Update many Category_28s
     * const category_28 = await prisma.category_28.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Category_28s and only return the `cid`
     * const category_28WithCidOnly = await prisma.category_28.updateManyAndReturn({
     *   select: { cid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Category_28UpdateManyAndReturnArgs>(args: SelectSubset<T, Category_28UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category_28.
     * @param {Category_28UpsertArgs} args - Arguments to update or create a Category_28.
     * @example
     * // Update or create a Category_28
     * const category_28 = await prisma.category_28.upsert({
     *   create: {
     *     // ... data to create a Category_28
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category_28 we want to update
     *   }
     * })
     */
    upsert<T extends Category_28UpsertArgs>(args: SelectSubset<T, Category_28UpsertArgs<ExtArgs>>): Prisma__Category_28Client<$Result.GetResult<Prisma.$Category_28Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Category_28s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_28CountArgs} args - Arguments to filter Category_28s to count.
     * @example
     * // Count the number of Category_28s
     * const count = await prisma.category_28.count({
     *   where: {
     *     // ... the filter for the Category_28s we want to count
     *   }
     * })
    **/
    count<T extends Category_28CountArgs>(
      args?: Subset<T, Category_28CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Category_28CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category_28.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_28AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Category_28AggregateArgs>(args: Subset<T, Category_28AggregateArgs>): Prisma.PrismaPromise<GetCategory_28AggregateType<T>>

    /**
     * Group by Category_28.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Category_28GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Category_28GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Category_28GroupByArgs['orderBy'] }
        : { orderBy?: Category_28GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Category_28GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategory_28GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category_28 model
   */
  readonly fields: Category_28FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category_28.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Category_28Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category_28 model
   */
  interface Category_28FieldRefs {
    readonly cid: FieldRef<"Category_28", 'Int'>
    readonly cname: FieldRef<"Category_28", 'String'>
    readonly size: FieldRef<"Category_28", 'String'>
    readonly image_url: FieldRef<"Category_28", 'String'>
    readonly remote_image_url: FieldRef<"Category_28", 'String'>
    readonly link_url: FieldRef<"Category_28", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category_28 findUnique
   */
  export type Category_28FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * Filter, which Category_28 to fetch.
     */
    where: Category_28WhereUniqueInput
  }

  /**
   * Category_28 findUniqueOrThrow
   */
  export type Category_28FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * Filter, which Category_28 to fetch.
     */
    where: Category_28WhereUniqueInput
  }

  /**
   * Category_28 findFirst
   */
  export type Category_28FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * Filter, which Category_28 to fetch.
     */
    where?: Category_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_28s to fetch.
     */
    orderBy?: Category_28OrderByWithRelationInput | Category_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_28s.
     */
    cursor?: Category_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_28s.
     */
    distinct?: Category_28ScalarFieldEnum | Category_28ScalarFieldEnum[]
  }

  /**
   * Category_28 findFirstOrThrow
   */
  export type Category_28FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * Filter, which Category_28 to fetch.
     */
    where?: Category_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_28s to fetch.
     */
    orderBy?: Category_28OrderByWithRelationInput | Category_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Category_28s.
     */
    cursor?: Category_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_28s.
     */
    distinct?: Category_28ScalarFieldEnum | Category_28ScalarFieldEnum[]
  }

  /**
   * Category_28 findMany
   */
  export type Category_28FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * Filter, which Category_28s to fetch.
     */
    where?: Category_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Category_28s to fetch.
     */
    orderBy?: Category_28OrderByWithRelationInput | Category_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Category_28s.
     */
    cursor?: Category_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Category_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Category_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Category_28s.
     */
    distinct?: Category_28ScalarFieldEnum | Category_28ScalarFieldEnum[]
  }

  /**
   * Category_28 create
   */
  export type Category_28CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * The data needed to create a Category_28.
     */
    data: XOR<Category_28CreateInput, Category_28UncheckedCreateInput>
  }

  /**
   * Category_28 createMany
   */
  export type Category_28CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Category_28s.
     */
    data: Category_28CreateManyInput | Category_28CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category_28 createManyAndReturn
   */
  export type Category_28CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * The data used to create many Category_28s.
     */
    data: Category_28CreateManyInput | Category_28CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category_28 update
   */
  export type Category_28UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * The data needed to update a Category_28.
     */
    data: XOR<Category_28UpdateInput, Category_28UncheckedUpdateInput>
    /**
     * Choose, which Category_28 to update.
     */
    where: Category_28WhereUniqueInput
  }

  /**
   * Category_28 updateMany
   */
  export type Category_28UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Category_28s.
     */
    data: XOR<Category_28UpdateManyMutationInput, Category_28UncheckedUpdateManyInput>
    /**
     * Filter which Category_28s to update
     */
    where?: Category_28WhereInput
    /**
     * Limit how many Category_28s to update.
     */
    limit?: number
  }

  /**
   * Category_28 updateManyAndReturn
   */
  export type Category_28UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * The data used to update Category_28s.
     */
    data: XOR<Category_28UpdateManyMutationInput, Category_28UncheckedUpdateManyInput>
    /**
     * Filter which Category_28s to update
     */
    where?: Category_28WhereInput
    /**
     * Limit how many Category_28s to update.
     */
    limit?: number
  }

  /**
   * Category_28 upsert
   */
  export type Category_28UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * The filter to search for the Category_28 to update in case it exists.
     */
    where: Category_28WhereUniqueInput
    /**
     * In case the Category_28 found by the `where` argument doesn't exist, create a new Category_28 with this data.
     */
    create: XOR<Category_28CreateInput, Category_28UncheckedCreateInput>
    /**
     * In case the Category_28 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Category_28UpdateInput, Category_28UncheckedUpdateInput>
  }

  /**
   * Category_28 delete
   */
  export type Category_28DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
    /**
     * Filter which Category_28 to delete.
     */
    where: Category_28WhereUniqueInput
  }

  /**
   * Category_28 deleteMany
   */
  export type Category_28DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category_28s to delete
     */
    where?: Category_28WhereInput
    /**
     * Limit how many Category_28s to delete.
     */
    limit?: number
  }

  /**
   * Category_28 without action
   */
  export type Category_28DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category_28
     */
    select?: Category_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Category_28
     */
    omit?: Category_28Omit<ExtArgs> | null
  }


  /**
   * Model Shop_28
   */

  export type AggregateShop_28 = {
    _count: Shop_28CountAggregateOutputType | null
    _avg: Shop_28AvgAggregateOutputType | null
    _sum: Shop_28SumAggregateOutputType | null
    _min: Shop_28MinAggregateOutputType | null
    _max: Shop_28MaxAggregateOutputType | null
  }

  export type Shop_28AvgAggregateOutputType = {
    pid: number | null
    cat_id: number | null
    price: number | null
  }

  export type Shop_28SumAggregateOutputType = {
    pid: number | null
    cat_id: number | null
    price: number | null
  }

  export type Shop_28MinAggregateOutputType = {
    pid: number | null
    pname: string | null
    cat_id: number | null
    price: number | null
    img_url: string | null
    remote_img_url: string | null
  }

  export type Shop_28MaxAggregateOutputType = {
    pid: number | null
    pname: string | null
    cat_id: number | null
    price: number | null
    img_url: string | null
    remote_img_url: string | null
  }

  export type Shop_28CountAggregateOutputType = {
    pid: number
    pname: number
    cat_id: number
    price: number
    img_url: number
    remote_img_url: number
    _all: number
  }


  export type Shop_28AvgAggregateInputType = {
    pid?: true
    cat_id?: true
    price?: true
  }

  export type Shop_28SumAggregateInputType = {
    pid?: true
    cat_id?: true
    price?: true
  }

  export type Shop_28MinAggregateInputType = {
    pid?: true
    pname?: true
    cat_id?: true
    price?: true
    img_url?: true
    remote_img_url?: true
  }

  export type Shop_28MaxAggregateInputType = {
    pid?: true
    pname?: true
    cat_id?: true
    price?: true
    img_url?: true
    remote_img_url?: true
  }

  export type Shop_28CountAggregateInputType = {
    pid?: true
    pname?: true
    cat_id?: true
    price?: true
    img_url?: true
    remote_img_url?: true
    _all?: true
  }

  export type Shop_28AggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop_28 to aggregate.
     */
    where?: Shop_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_28s to fetch.
     */
    orderBy?: Shop_28OrderByWithRelationInput | Shop_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Shop_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shop_28s
    **/
    _count?: true | Shop_28CountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Shop_28AvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Shop_28SumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Shop_28MinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Shop_28MaxAggregateInputType
  }

  export type GetShop_28AggregateType<T extends Shop_28AggregateArgs> = {
        [P in keyof T & keyof AggregateShop_28]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop_28[P]>
      : GetScalarType<T[P], AggregateShop_28[P]>
  }




  export type Shop_28GroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Shop_28WhereInput
    orderBy?: Shop_28OrderByWithAggregationInput | Shop_28OrderByWithAggregationInput[]
    by: Shop_28ScalarFieldEnum[] | Shop_28ScalarFieldEnum
    having?: Shop_28ScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Shop_28CountAggregateInputType | true
    _avg?: Shop_28AvgAggregateInputType
    _sum?: Shop_28SumAggregateInputType
    _min?: Shop_28MinAggregateInputType
    _max?: Shop_28MaxAggregateInputType
  }

  export type Shop_28GroupByOutputType = {
    pid: number
    pname: string | null
    cat_id: number | null
    price: number | null
    img_url: string | null
    remote_img_url: string | null
    _count: Shop_28CountAggregateOutputType | null
    _avg: Shop_28AvgAggregateOutputType | null
    _sum: Shop_28SumAggregateOutputType | null
    _min: Shop_28MinAggregateOutputType | null
    _max: Shop_28MaxAggregateOutputType | null
  }

  type GetShop_28GroupByPayload<T extends Shop_28GroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Shop_28GroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Shop_28GroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Shop_28GroupByOutputType[P]>
            : GetScalarType<T[P], Shop_28GroupByOutputType[P]>
        }
      >
    >


  export type Shop_28Select<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }, ExtArgs["result"]["shop_28"]>

  export type Shop_28SelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }, ExtArgs["result"]["shop_28"]>

  export type Shop_28SelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }, ExtArgs["result"]["shop_28"]>

  export type Shop_28SelectScalar = {
    pid?: boolean
    pname?: boolean
    cat_id?: boolean
    price?: boolean
    img_url?: boolean
    remote_img_url?: boolean
  }

  export type Shop_28Omit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"pid" | "pname" | "cat_id" | "price" | "img_url" | "remote_img_url", ExtArgs["result"]["shop_28"]>

  export type $Shop_28Payload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop_28"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pid: number
      pname: string | null
      cat_id: number | null
      price: number | null
      img_url: string | null
      remote_img_url: string | null
    }, ExtArgs["result"]["shop_28"]>
    composites: {}
  }

  type Shop_28GetPayload<S extends boolean | null | undefined | Shop_28DefaultArgs> = $Result.GetResult<Prisma.$Shop_28Payload, S>

  type Shop_28CountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Shop_28FindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Shop_28CountAggregateInputType | true
    }

  export interface Shop_28Delegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop_28'], meta: { name: 'Shop_28' } }
    /**
     * Find zero or one Shop_28 that matches the filter.
     * @param {Shop_28FindUniqueArgs} args - Arguments to find a Shop_28
     * @example
     * // Get one Shop_28
     * const shop_28 = await prisma.shop_28.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Shop_28FindUniqueArgs>(args: SelectSubset<T, Shop_28FindUniqueArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop_28 that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Shop_28FindUniqueOrThrowArgs} args - Arguments to find a Shop_28
     * @example
     * // Get one Shop_28
     * const shop_28 = await prisma.shop_28.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Shop_28FindUniqueOrThrowArgs>(args: SelectSubset<T, Shop_28FindUniqueOrThrowArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop_28 that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_28FindFirstArgs} args - Arguments to find a Shop_28
     * @example
     * // Get one Shop_28
     * const shop_28 = await prisma.shop_28.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Shop_28FindFirstArgs>(args?: SelectSubset<T, Shop_28FindFirstArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop_28 that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_28FindFirstOrThrowArgs} args - Arguments to find a Shop_28
     * @example
     * // Get one Shop_28
     * const shop_28 = await prisma.shop_28.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Shop_28FindFirstOrThrowArgs>(args?: SelectSubset<T, Shop_28FindFirstOrThrowArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shop_28s that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_28FindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shop_28s
     * const shop_28s = await prisma.shop_28.findMany()
     * 
     * // Get first 10 Shop_28s
     * const shop_28s = await prisma.shop_28.findMany({ take: 10 })
     * 
     * // Only select the `pid`
     * const shop_28WithPidOnly = await prisma.shop_28.findMany({ select: { pid: true } })
     * 
     */
    findMany<T extends Shop_28FindManyArgs>(args?: SelectSubset<T, Shop_28FindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop_28.
     * @param {Shop_28CreateArgs} args - Arguments to create a Shop_28.
     * @example
     * // Create one Shop_28
     * const Shop_28 = await prisma.shop_28.create({
     *   data: {
     *     // ... data to create a Shop_28
     *   }
     * })
     * 
     */
    create<T extends Shop_28CreateArgs>(args: SelectSubset<T, Shop_28CreateArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shop_28s.
     * @param {Shop_28CreateManyArgs} args - Arguments to create many Shop_28s.
     * @example
     * // Create many Shop_28s
     * const shop_28 = await prisma.shop_28.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Shop_28CreateManyArgs>(args?: SelectSubset<T, Shop_28CreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shop_28s and returns the data saved in the database.
     * @param {Shop_28CreateManyAndReturnArgs} args - Arguments to create many Shop_28s.
     * @example
     * // Create many Shop_28s
     * const shop_28 = await prisma.shop_28.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shop_28s and only return the `pid`
     * const shop_28WithPidOnly = await prisma.shop_28.createManyAndReturn({
     *   select: { pid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Shop_28CreateManyAndReturnArgs>(args?: SelectSubset<T, Shop_28CreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop_28.
     * @param {Shop_28DeleteArgs} args - Arguments to delete one Shop_28.
     * @example
     * // Delete one Shop_28
     * const Shop_28 = await prisma.shop_28.delete({
     *   where: {
     *     // ... filter to delete one Shop_28
     *   }
     * })
     * 
     */
    delete<T extends Shop_28DeleteArgs>(args: SelectSubset<T, Shop_28DeleteArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop_28.
     * @param {Shop_28UpdateArgs} args - Arguments to update one Shop_28.
     * @example
     * // Update one Shop_28
     * const shop_28 = await prisma.shop_28.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Shop_28UpdateArgs>(args: SelectSubset<T, Shop_28UpdateArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shop_28s.
     * @param {Shop_28DeleteManyArgs} args - Arguments to filter Shop_28s to delete.
     * @example
     * // Delete a few Shop_28s
     * const { count } = await prisma.shop_28.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Shop_28DeleteManyArgs>(args?: SelectSubset<T, Shop_28DeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shop_28s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_28UpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shop_28s
     * const shop_28 = await prisma.shop_28.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Shop_28UpdateManyArgs>(args: SelectSubset<T, Shop_28UpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shop_28s and returns the data updated in the database.
     * @param {Shop_28UpdateManyAndReturnArgs} args - Arguments to update many Shop_28s.
     * @example
     * // Update many Shop_28s
     * const shop_28 = await prisma.shop_28.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shop_28s and only return the `pid`
     * const shop_28WithPidOnly = await prisma.shop_28.updateManyAndReturn({
     *   select: { pid: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Shop_28UpdateManyAndReturnArgs>(args: SelectSubset<T, Shop_28UpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop_28.
     * @param {Shop_28UpsertArgs} args - Arguments to update or create a Shop_28.
     * @example
     * // Update or create a Shop_28
     * const shop_28 = await prisma.shop_28.upsert({
     *   create: {
     *     // ... data to create a Shop_28
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop_28 we want to update
     *   }
     * })
     */
    upsert<T extends Shop_28UpsertArgs>(args: SelectSubset<T, Shop_28UpsertArgs<ExtArgs>>): Prisma__Shop_28Client<$Result.GetResult<Prisma.$Shop_28Payload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shop_28s.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_28CountArgs} args - Arguments to filter Shop_28s to count.
     * @example
     * // Count the number of Shop_28s
     * const count = await prisma.shop_28.count({
     *   where: {
     *     // ... the filter for the Shop_28s we want to count
     *   }
     * })
    **/
    count<T extends Shop_28CountArgs>(
      args?: Subset<T, Shop_28CountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Shop_28CountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop_28.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_28AggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Shop_28AggregateArgs>(args: Subset<T, Shop_28AggregateArgs>): Prisma.PrismaPromise<GetShop_28AggregateType<T>>

    /**
     * Group by Shop_28.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Shop_28GroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Shop_28GroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Shop_28GroupByArgs['orderBy'] }
        : { orderBy?: Shop_28GroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Shop_28GroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShop_28GroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop_28 model
   */
  readonly fields: Shop_28FieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop_28.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Shop_28Client<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shop_28 model
   */
  interface Shop_28FieldRefs {
    readonly pid: FieldRef<"Shop_28", 'Int'>
    readonly pname: FieldRef<"Shop_28", 'String'>
    readonly cat_id: FieldRef<"Shop_28", 'Int'>
    readonly price: FieldRef<"Shop_28", 'Float'>
    readonly img_url: FieldRef<"Shop_28", 'String'>
    readonly remote_img_url: FieldRef<"Shop_28", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Shop_28 findUnique
   */
  export type Shop_28FindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * Filter, which Shop_28 to fetch.
     */
    where: Shop_28WhereUniqueInput
  }

  /**
   * Shop_28 findUniqueOrThrow
   */
  export type Shop_28FindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * Filter, which Shop_28 to fetch.
     */
    where: Shop_28WhereUniqueInput
  }

  /**
   * Shop_28 findFirst
   */
  export type Shop_28FindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * Filter, which Shop_28 to fetch.
     */
    where?: Shop_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_28s to fetch.
     */
    orderBy?: Shop_28OrderByWithRelationInput | Shop_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shop_28s.
     */
    cursor?: Shop_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shop_28s.
     */
    distinct?: Shop_28ScalarFieldEnum | Shop_28ScalarFieldEnum[]
  }

  /**
   * Shop_28 findFirstOrThrow
   */
  export type Shop_28FindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * Filter, which Shop_28 to fetch.
     */
    where?: Shop_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_28s to fetch.
     */
    orderBy?: Shop_28OrderByWithRelationInput | Shop_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shop_28s.
     */
    cursor?: Shop_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shop_28s.
     */
    distinct?: Shop_28ScalarFieldEnum | Shop_28ScalarFieldEnum[]
  }

  /**
   * Shop_28 findMany
   */
  export type Shop_28FindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * Filter, which Shop_28s to fetch.
     */
    where?: Shop_28WhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shop_28s to fetch.
     */
    orderBy?: Shop_28OrderByWithRelationInput | Shop_28OrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shop_28s.
     */
    cursor?: Shop_28WhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shop_28s from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shop_28s.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shop_28s.
     */
    distinct?: Shop_28ScalarFieldEnum | Shop_28ScalarFieldEnum[]
  }

  /**
   * Shop_28 create
   */
  export type Shop_28CreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * The data needed to create a Shop_28.
     */
    data: XOR<Shop_28CreateInput, Shop_28UncheckedCreateInput>
  }

  /**
   * Shop_28 createMany
   */
  export type Shop_28CreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shop_28s.
     */
    data: Shop_28CreateManyInput | Shop_28CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop_28 createManyAndReturn
   */
  export type Shop_28CreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28SelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * The data used to create many Shop_28s.
     */
    data: Shop_28CreateManyInput | Shop_28CreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop_28 update
   */
  export type Shop_28UpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * The data needed to update a Shop_28.
     */
    data: XOR<Shop_28UpdateInput, Shop_28UncheckedUpdateInput>
    /**
     * Choose, which Shop_28 to update.
     */
    where: Shop_28WhereUniqueInput
  }

  /**
   * Shop_28 updateMany
   */
  export type Shop_28UpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shop_28s.
     */
    data: XOR<Shop_28UpdateManyMutationInput, Shop_28UncheckedUpdateManyInput>
    /**
     * Filter which Shop_28s to update
     */
    where?: Shop_28WhereInput
    /**
     * Limit how many Shop_28s to update.
     */
    limit?: number
  }

  /**
   * Shop_28 updateManyAndReturn
   */
  export type Shop_28UpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28SelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * The data used to update Shop_28s.
     */
    data: XOR<Shop_28UpdateManyMutationInput, Shop_28UncheckedUpdateManyInput>
    /**
     * Filter which Shop_28s to update
     */
    where?: Shop_28WhereInput
    /**
     * Limit how many Shop_28s to update.
     */
    limit?: number
  }

  /**
   * Shop_28 upsert
   */
  export type Shop_28UpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * The filter to search for the Shop_28 to update in case it exists.
     */
    where: Shop_28WhereUniqueInput
    /**
     * In case the Shop_28 found by the `where` argument doesn't exist, create a new Shop_28 with this data.
     */
    create: XOR<Shop_28CreateInput, Shop_28UncheckedCreateInput>
    /**
     * In case the Shop_28 was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Shop_28UpdateInput, Shop_28UncheckedUpdateInput>
  }

  /**
   * Shop_28 delete
   */
  export type Shop_28DeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
    /**
     * Filter which Shop_28 to delete.
     */
    where: Shop_28WhereUniqueInput
  }

  /**
   * Shop_28 deleteMany
   */
  export type Shop_28DeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop_28s to delete
     */
    where?: Shop_28WhereInput
    /**
     * Limit how many Shop_28s to delete.
     */
    limit?: number
  }

  /**
   * Shop_28 without action
   */
  export type Shop_28DefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop_28
     */
    select?: Shop_28Select<ExtArgs> | null
    /**
     * Omit specific fields from the Shop_28
     */
    omit?: Shop_28Omit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const PostScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    published: 'published',
    authorId: 'authorId'
  };

  export type PostScalarFieldEnum = (typeof PostScalarFieldEnum)[keyof typeof PostScalarFieldEnum]


  export const GroceryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    completed: 'completed'
  };

  export type GroceryScalarFieldEnum = (typeof GroceryScalarFieldEnum)[keyof typeof GroceryScalarFieldEnum]


  export const Blog_28ScalarFieldEnum: {
    id: 'id',
    title: 'title',
    descrip: 'descrip',
    category: 'category',
    img: 'img',
    remote_img: 'remote_img'
  };

  export type Blog_28ScalarFieldEnum = (typeof Blog_28ScalarFieldEnum)[keyof typeof Blog_28ScalarFieldEnum]


  export const Category_28ScalarFieldEnum: {
    cid: 'cid',
    cname: 'cname',
    size: 'size',
    image_url: 'image_url',
    remote_image_url: 'remote_image_url',
    link_url: 'link_url'
  };

  export type Category_28ScalarFieldEnum = (typeof Category_28ScalarFieldEnum)[keyof typeof Category_28ScalarFieldEnum]


  export const Shop_28ScalarFieldEnum: {
    pid: 'pid',
    pname: 'pname',
    cat_id: 'cat_id',
    price: 'price',
    img_url: 'img_url',
    remote_img_url: 'remote_img_url'
  };

  export type Shop_28ScalarFieldEnum = (typeof Shop_28ScalarFieldEnum)[keyof typeof Shop_28ScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    posts?: PostOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    posts?: PostListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type PostWhereInput = {
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PostOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
    author?: UserOrderByWithRelationInput
  }

  export type PostWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PostWhereInput | PostWhereInput[]
    OR?: PostWhereInput[]
    NOT?: PostWhereInput | PostWhereInput[]
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
    author?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PostOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrderInput | SortOrder
    published?: SortOrder
    authorId?: SortOrder
    _count?: PostCountOrderByAggregateInput
    _avg?: PostAvgOrderByAggregateInput
    _max?: PostMaxOrderByAggregateInput
    _min?: PostMinOrderByAggregateInput
    _sum?: PostSumOrderByAggregateInput
  }

  export type PostScalarWhereWithAggregatesInput = {
    AND?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    OR?: PostScalarWhereWithAggregatesInput[]
    NOT?: PostScalarWhereWithAggregatesInput | PostScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Post"> | number
    title?: StringWithAggregatesFilter<"Post"> | string
    content?: StringNullableWithAggregatesFilter<"Post"> | string | null
    published?: BoolWithAggregatesFilter<"Post"> | boolean
    authorId?: IntWithAggregatesFilter<"Post"> | number
  }

  export type GroceryWhereInput = {
    AND?: GroceryWhereInput | GroceryWhereInput[]
    OR?: GroceryWhereInput[]
    NOT?: GroceryWhereInput | GroceryWhereInput[]
    id?: StringFilter<"Grocery"> | string
    name?: StringFilter<"Grocery"> | string
    completed?: BoolFilter<"Grocery"> | boolean
  }

  export type GroceryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type GroceryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GroceryWhereInput | GroceryWhereInput[]
    OR?: GroceryWhereInput[]
    NOT?: GroceryWhereInput | GroceryWhereInput[]
    name?: StringFilter<"Grocery"> | string
    completed?: BoolFilter<"Grocery"> | boolean
  }, "id">

  export type GroceryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
    _count?: GroceryCountOrderByAggregateInput
    _max?: GroceryMaxOrderByAggregateInput
    _min?: GroceryMinOrderByAggregateInput
  }

  export type GroceryScalarWhereWithAggregatesInput = {
    AND?: GroceryScalarWhereWithAggregatesInput | GroceryScalarWhereWithAggregatesInput[]
    OR?: GroceryScalarWhereWithAggregatesInput[]
    NOT?: GroceryScalarWhereWithAggregatesInput | GroceryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Grocery"> | string
    name?: StringWithAggregatesFilter<"Grocery"> | string
    completed?: BoolWithAggregatesFilter<"Grocery"> | boolean
  }

  export type Blog_28WhereInput = {
    AND?: Blog_28WhereInput | Blog_28WhereInput[]
    OR?: Blog_28WhereInput[]
    NOT?: Blog_28WhereInput | Blog_28WhereInput[]
    id?: IntFilter<"Blog_28"> | number
    title?: StringNullableFilter<"Blog_28"> | string | null
    descrip?: StringNullableFilter<"Blog_28"> | string | null
    category?: StringNullableFilter<"Blog_28"> | string | null
    img?: StringNullableFilter<"Blog_28"> | string | null
    remote_img?: StringNullableFilter<"Blog_28"> | string | null
  }

  export type Blog_28OrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    descrip?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    remote_img?: SortOrderInput | SortOrder
  }

  export type Blog_28WhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: Blog_28WhereInput | Blog_28WhereInput[]
    OR?: Blog_28WhereInput[]
    NOT?: Blog_28WhereInput | Blog_28WhereInput[]
    title?: StringNullableFilter<"Blog_28"> | string | null
    descrip?: StringNullableFilter<"Blog_28"> | string | null
    category?: StringNullableFilter<"Blog_28"> | string | null
    img?: StringNullableFilter<"Blog_28"> | string | null
    remote_img?: StringNullableFilter<"Blog_28"> | string | null
  }, "id">

  export type Blog_28OrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    descrip?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    img?: SortOrderInput | SortOrder
    remote_img?: SortOrderInput | SortOrder
    _count?: Blog_28CountOrderByAggregateInput
    _avg?: Blog_28AvgOrderByAggregateInput
    _max?: Blog_28MaxOrderByAggregateInput
    _min?: Blog_28MinOrderByAggregateInput
    _sum?: Blog_28SumOrderByAggregateInput
  }

  export type Blog_28ScalarWhereWithAggregatesInput = {
    AND?: Blog_28ScalarWhereWithAggregatesInput | Blog_28ScalarWhereWithAggregatesInput[]
    OR?: Blog_28ScalarWhereWithAggregatesInput[]
    NOT?: Blog_28ScalarWhereWithAggregatesInput | Blog_28ScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Blog_28"> | number
    title?: StringNullableWithAggregatesFilter<"Blog_28"> | string | null
    descrip?: StringNullableWithAggregatesFilter<"Blog_28"> | string | null
    category?: StringNullableWithAggregatesFilter<"Blog_28"> | string | null
    img?: StringNullableWithAggregatesFilter<"Blog_28"> | string | null
    remote_img?: StringNullableWithAggregatesFilter<"Blog_28"> | string | null
  }

  export type Category_28WhereInput = {
    AND?: Category_28WhereInput | Category_28WhereInput[]
    OR?: Category_28WhereInput[]
    NOT?: Category_28WhereInput | Category_28WhereInput[]
    cid?: IntFilter<"Category_28"> | number
    cname?: StringNullableFilter<"Category_28"> | string | null
    size?: StringNullableFilter<"Category_28"> | string | null
    image_url?: StringNullableFilter<"Category_28"> | string | null
    remote_image_url?: StringNullableFilter<"Category_28"> | string | null
    link_url?: StringNullableFilter<"Category_28"> | string | null
  }

  export type Category_28OrderByWithRelationInput = {
    cid?: SortOrder
    cname?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    remote_image_url?: SortOrderInput | SortOrder
    link_url?: SortOrderInput | SortOrder
  }

  export type Category_28WhereUniqueInput = Prisma.AtLeast<{
    cid?: number
    AND?: Category_28WhereInput | Category_28WhereInput[]
    OR?: Category_28WhereInput[]
    NOT?: Category_28WhereInput | Category_28WhereInput[]
    cname?: StringNullableFilter<"Category_28"> | string | null
    size?: StringNullableFilter<"Category_28"> | string | null
    image_url?: StringNullableFilter<"Category_28"> | string | null
    remote_image_url?: StringNullableFilter<"Category_28"> | string | null
    link_url?: StringNullableFilter<"Category_28"> | string | null
  }, "cid">

  export type Category_28OrderByWithAggregationInput = {
    cid?: SortOrder
    cname?: SortOrderInput | SortOrder
    size?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    remote_image_url?: SortOrderInput | SortOrder
    link_url?: SortOrderInput | SortOrder
    _count?: Category_28CountOrderByAggregateInput
    _avg?: Category_28AvgOrderByAggregateInput
    _max?: Category_28MaxOrderByAggregateInput
    _min?: Category_28MinOrderByAggregateInput
    _sum?: Category_28SumOrderByAggregateInput
  }

  export type Category_28ScalarWhereWithAggregatesInput = {
    AND?: Category_28ScalarWhereWithAggregatesInput | Category_28ScalarWhereWithAggregatesInput[]
    OR?: Category_28ScalarWhereWithAggregatesInput[]
    NOT?: Category_28ScalarWhereWithAggregatesInput | Category_28ScalarWhereWithAggregatesInput[]
    cid?: IntWithAggregatesFilter<"Category_28"> | number
    cname?: StringNullableWithAggregatesFilter<"Category_28"> | string | null
    size?: StringNullableWithAggregatesFilter<"Category_28"> | string | null
    image_url?: StringNullableWithAggregatesFilter<"Category_28"> | string | null
    remote_image_url?: StringNullableWithAggregatesFilter<"Category_28"> | string | null
    link_url?: StringNullableWithAggregatesFilter<"Category_28"> | string | null
  }

  export type Shop_28WhereInput = {
    AND?: Shop_28WhereInput | Shop_28WhereInput[]
    OR?: Shop_28WhereInput[]
    NOT?: Shop_28WhereInput | Shop_28WhereInput[]
    pid?: IntFilter<"Shop_28"> | number
    pname?: StringNullableFilter<"Shop_28"> | string | null
    cat_id?: IntNullableFilter<"Shop_28"> | number | null
    price?: FloatNullableFilter<"Shop_28"> | number | null
    img_url?: StringNullableFilter<"Shop_28"> | string | null
    remote_img_url?: StringNullableFilter<"Shop_28"> | string | null
  }

  export type Shop_28OrderByWithRelationInput = {
    pid?: SortOrder
    pname?: SortOrderInput | SortOrder
    cat_id?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    remote_img_url?: SortOrderInput | SortOrder
  }

  export type Shop_28WhereUniqueInput = Prisma.AtLeast<{
    pid?: number
    AND?: Shop_28WhereInput | Shop_28WhereInput[]
    OR?: Shop_28WhereInput[]
    NOT?: Shop_28WhereInput | Shop_28WhereInput[]
    pname?: StringNullableFilter<"Shop_28"> | string | null
    cat_id?: IntNullableFilter<"Shop_28"> | number | null
    price?: FloatNullableFilter<"Shop_28"> | number | null
    img_url?: StringNullableFilter<"Shop_28"> | string | null
    remote_img_url?: StringNullableFilter<"Shop_28"> | string | null
  }, "pid">

  export type Shop_28OrderByWithAggregationInput = {
    pid?: SortOrder
    pname?: SortOrderInput | SortOrder
    cat_id?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    img_url?: SortOrderInput | SortOrder
    remote_img_url?: SortOrderInput | SortOrder
    _count?: Shop_28CountOrderByAggregateInput
    _avg?: Shop_28AvgOrderByAggregateInput
    _max?: Shop_28MaxOrderByAggregateInput
    _min?: Shop_28MinOrderByAggregateInput
    _sum?: Shop_28SumOrderByAggregateInput
  }

  export type Shop_28ScalarWhereWithAggregatesInput = {
    AND?: Shop_28ScalarWhereWithAggregatesInput | Shop_28ScalarWhereWithAggregatesInput[]
    OR?: Shop_28ScalarWhereWithAggregatesInput[]
    NOT?: Shop_28ScalarWhereWithAggregatesInput | Shop_28ScalarWhereWithAggregatesInput[]
    pid?: IntWithAggregatesFilter<"Shop_28"> | number
    pname?: StringNullableWithAggregatesFilter<"Shop_28"> | string | null
    cat_id?: IntNullableWithAggregatesFilter<"Shop_28"> | number | null
    price?: FloatNullableWithAggregatesFilter<"Shop_28"> | number | null
    img_url?: StringNullableWithAggregatesFilter<"Shop_28"> | string | null
    remote_img_url?: StringNullableWithAggregatesFilter<"Shop_28"> | string | null
  }

  export type UserCreateInput = {
    email: string
    name?: string | null
    posts?: PostCreateNestedManyWithoutAuthorInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    posts?: PostUncheckedCreateNestedManyWithoutAuthorInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUpdateManyWithoutAuthorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    posts?: PostUncheckedUpdateManyWithoutAuthorNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateInput = {
    title: string
    content?: string | null
    published?: boolean
    author: UserCreateNestedOneWithoutPostsInput
  }

  export type PostUncheckedCreateInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type PostUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    author?: UserUpdateOneRequiredWithoutPostsNestedInput
  }

  export type PostUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type PostCreateManyInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
    authorId: number
  }

  export type PostUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    authorId?: IntFieldUpdateOperationsInput | number
  }

  export type GroceryCreateInput = {
    id?: string
    name: string
    completed?: boolean
  }

  export type GroceryUncheckedCreateInput = {
    id?: string
    name: string
    completed?: boolean
  }

  export type GroceryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroceryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroceryCreateManyInput = {
    id?: string
    name: string
    completed?: boolean
  }

  export type GroceryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type GroceryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completed?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Blog_28CreateInput = {
    id: number
    title?: string | null
    descrip?: string | null
    category?: string | null
    img?: string | null
    remote_img?: string | null
  }

  export type Blog_28UncheckedCreateInput = {
    id: number
    title?: string | null
    descrip?: string | null
    category?: string | null
    img?: string | null
    remote_img?: string | null
  }

  export type Blog_28UpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Blog_28UncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Blog_28CreateManyInput = {
    id: number
    title?: string | null
    descrip?: string | null
    category?: string | null
    img?: string | null
    remote_img?: string | null
  }

  export type Blog_28UpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Blog_28UncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    descrip?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    img?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_28CreateInput = {
    cid: number
    cname?: string | null
    size?: string | null
    image_url?: string | null
    remote_image_url?: string | null
    link_url?: string | null
  }

  export type Category_28UncheckedCreateInput = {
    cid: number
    cname?: string | null
    size?: string | null
    image_url?: string | null
    remote_image_url?: string | null
    link_url?: string | null
  }

  export type Category_28UpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_28UncheckedUpdateInput = {
    cid?: IntFieldUpdateOperationsInput | number
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_28CreateManyInput = {
    cid: number
    cname?: string | null
    size?: string | null
    image_url?: string | null
    remote_image_url?: string | null
    link_url?: string | null
  }

  export type Category_28UpdateManyMutationInput = {
    cid?: IntFieldUpdateOperationsInput | number
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Category_28UncheckedUpdateManyInput = {
    cid?: IntFieldUpdateOperationsInput | number
    cname?: NullableStringFieldUpdateOperationsInput | string | null
    size?: NullableStringFieldUpdateOperationsInput | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_image_url?: NullableStringFieldUpdateOperationsInput | string | null
    link_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shop_28CreateInput = {
    pid: number
    pname?: string | null
    cat_id?: number | null
    price?: number | null
    img_url?: string | null
    remote_img_url?: string | null
  }

  export type Shop_28UncheckedCreateInput = {
    pid: number
    pname?: string | null
    cat_id?: number | null
    price?: number | null
    img_url?: string | null
    remote_img_url?: string | null
  }

  export type Shop_28UpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shop_28UncheckedUpdateInput = {
    pid?: IntFieldUpdateOperationsInput | number
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shop_28CreateManyInput = {
    pid: number
    pname?: string | null
    cat_id?: number | null
    price?: number | null
    img_url?: string | null
    remote_img_url?: string | null
  }

  export type Shop_28UpdateManyMutationInput = {
    pid?: IntFieldUpdateOperationsInput | number
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Shop_28UncheckedUpdateManyInput = {
    pid?: IntFieldUpdateOperationsInput | number
    pname?: NullableStringFieldUpdateOperationsInput | string | null
    cat_id?: NullableIntFieldUpdateOperationsInput | number | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    img_url?: NullableStringFieldUpdateOperationsInput | string | null
    remote_img_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type PostListRelationFilter = {
    every?: PostWhereInput
    some?: PostWhereInput
    none?: PostWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PostOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PostCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostAvgOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type PostMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    published?: SortOrder
    authorId?: SortOrder
  }

  export type PostSumOrderByAggregateInput = {
    id?: SortOrder
    authorId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type GroceryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type GroceryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type GroceryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    completed?: SortOrder
  }

  export type Blog_28CountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
    remote_img?: SortOrder
  }

  export type Blog_28AvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Blog_28MaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
    remote_img?: SortOrder
  }

  export type Blog_28MinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    descrip?: SortOrder
    category?: SortOrder
    img?: SortOrder
    remote_img?: SortOrder
  }

  export type Blog_28SumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type Category_28CountOrderByAggregateInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrder
    image_url?: SortOrder
    remote_image_url?: SortOrder
    link_url?: SortOrder
  }

  export type Category_28AvgOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type Category_28MaxOrderByAggregateInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrder
    image_url?: SortOrder
    remote_image_url?: SortOrder
    link_url?: SortOrder
  }

  export type Category_28MinOrderByAggregateInput = {
    cid?: SortOrder
    cname?: SortOrder
    size?: SortOrder
    image_url?: SortOrder
    remote_image_url?: SortOrder
    link_url?: SortOrder
  }

  export type Category_28SumOrderByAggregateInput = {
    cid?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type Shop_28CountOrderByAggregateInput = {
    pid?: SortOrder
    pname?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
    img_url?: SortOrder
    remote_img_url?: SortOrder
  }

  export type Shop_28AvgOrderByAggregateInput = {
    pid?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
  }

  export type Shop_28MaxOrderByAggregateInput = {
    pid?: SortOrder
    pname?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
    img_url?: SortOrder
    remote_img_url?: SortOrder
  }

  export type Shop_28MinOrderByAggregateInput = {
    pid?: SortOrder
    pname?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
    img_url?: SortOrder
    remote_img_url?: SortOrder
  }

  export type Shop_28SumOrderByAggregateInput = {
    pid?: SortOrder
    cat_id?: SortOrder
    price?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PostCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type PostUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type PostUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PostUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput> | PostCreateWithoutAuthorInput[] | PostUncheckedCreateWithoutAuthorInput[]
    connectOrCreate?: PostCreateOrConnectWithoutAuthorInput | PostCreateOrConnectWithoutAuthorInput[]
    upsert?: PostUpsertWithWhereUniqueWithoutAuthorInput | PostUpsertWithWhereUniqueWithoutAuthorInput[]
    createMany?: PostCreateManyAuthorInputEnvelope
    set?: PostWhereUniqueInput | PostWhereUniqueInput[]
    disconnect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    delete?: PostWhereUniqueInput | PostWhereUniqueInput[]
    connect?: PostWhereUniqueInput | PostWhereUniqueInput[]
    update?: PostUpdateWithWhereUniqueWithoutAuthorInput | PostUpdateWithWhereUniqueWithoutAuthorInput[]
    updateMany?: PostUpdateManyWithWhereWithoutAuthorInput | PostUpdateManyWithWhereWithoutAuthorInput[]
    deleteMany?: PostScalarWhereInput | PostScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutPostsInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutPostsNestedInput = {
    create?: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPostsInput
    upsert?: UserUpsertWithoutPostsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPostsInput, UserUpdateWithoutPostsInput>, UserUncheckedUpdateWithoutPostsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type PostCreateWithoutAuthorInput = {
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUncheckedCreateWithoutAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostCreateOrConnectWithoutAuthorInput = {
    where: PostWhereUniqueInput
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostCreateManyAuthorInputEnvelope = {
    data: PostCreateManyAuthorInput | PostCreateManyAuthorInput[]
    skipDuplicates?: boolean
  }

  export type PostUpsertWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    update: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
    create: XOR<PostCreateWithoutAuthorInput, PostUncheckedCreateWithoutAuthorInput>
  }

  export type PostUpdateWithWhereUniqueWithoutAuthorInput = {
    where: PostWhereUniqueInput
    data: XOR<PostUpdateWithoutAuthorInput, PostUncheckedUpdateWithoutAuthorInput>
  }

  export type PostUpdateManyWithWhereWithoutAuthorInput = {
    where: PostScalarWhereInput
    data: XOR<PostUpdateManyMutationInput, PostUncheckedUpdateManyWithoutAuthorInput>
  }

  export type PostScalarWhereInput = {
    AND?: PostScalarWhereInput | PostScalarWhereInput[]
    OR?: PostScalarWhereInput[]
    NOT?: PostScalarWhereInput | PostScalarWhereInput[]
    id?: IntFilter<"Post"> | number
    title?: StringFilter<"Post"> | string
    content?: StringNullableFilter<"Post"> | string | null
    published?: BoolFilter<"Post"> | boolean
    authorId?: IntFilter<"Post"> | number
  }

  export type UserCreateWithoutPostsInput = {
    email: string
    name?: string | null
  }

  export type UserUncheckedCreateWithoutPostsInput = {
    id?: number
    email: string
    name?: string | null
  }

  export type UserCreateOrConnectWithoutPostsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
  }

  export type UserUpsertWithoutPostsInput = {
    update: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
    create: XOR<UserCreateWithoutPostsInput, UserUncheckedCreateWithoutPostsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPostsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPostsInput, UserUncheckedUpdateWithoutPostsInput>
  }

  export type UserUpdateWithoutPostsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateWithoutPostsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostCreateManyAuthorInput = {
    id?: number
    title: string
    content?: string | null
    published?: boolean
  }

  export type PostUpdateWithoutAuthorInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PostUncheckedUpdateManyWithoutAuthorInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}